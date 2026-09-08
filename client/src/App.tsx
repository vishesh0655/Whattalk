import { useState } from "react";
import type { FormEvent } from "react";
import "./App.css";

type Message = {
  id: number;
  text: string;
  time: string;
  sender: "me" | "them";
};

type Chat = {
  id: number;
  name: string;
  avatar: string;
  online: boolean;
  messages: Message[];
};

const initialChats: Chat[] = [
  {
    id: 1,
    name: "Alex",
    avatar: "A",
    online: true,
    messages: [
      {
        id: 1,
        text: "Hey bro! 👋",
        time: "11:40 PM",
        sender: "them",
      },
      {
        id: 2,
        text: "Hey! What's up?",
        time: "11:41 PM",
        sender: "me",
      },
      {
        id: 3,
        text: "Nothing much 😂 What are you working on?",
        time: "11:41 PM",
        sender: "them",
      },
      {
        id: 4,
        text: "I'm building WhatTalk 🔥",
        time: "11:42 PM",
        sender: "me",
      },
    ],
  },

  {
    id: 2,
    name: "Rahul",
    avatar: "R",
    online: true,
    messages: [
      {
        id: 1,
        text: "See you tomorrow 👍",
        time: "10:31 PM",
        sender: "them",
      },
    ],
  },

  {
    id: 3,
    name: "Priya",
    avatar: "P",
    online: false,
    messages: [
      {
        id: 1,
        text: "Okay, sounds good!",
        time: "9:18 PM",
        sender: "them",
      },
    ],
  },
];

function App() {
  const [chats, setChats] = useState<Chat[]>(initialChats);
  const [selectedChatId, setSelectedChatId] = useState(1);
  const [search, setSearch] = useState("");
  const [message, setMessage] = useState("");

  const selectedChat = chats.find(
    (chat) => chat.id === selectedChatId
  );

  const filteredChats = chats.filter((chat) =>
    chat.name.toLowerCase().includes(search.toLowerCase())
  );

  const sendMessage = (event: FormEvent) => {
    event.preventDefault();

    const text = message.trim();

    if (!text) {
      return;
    }

    const newMessage: Message = {
      id: Date.now(),
      text,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      sender: "me",
    };

    setChats((currentChats) =>
      currentChats.map((chat) =>
        chat.id === selectedChatId
          ? {
              ...chat,
              messages: [...chat.messages, newMessage],
            }
          : chat
      )
    );

    setMessage("");
  };

  return (
    <div className="app">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <h1>WhatTalk</h1>

          <button className="menu-button" type="button">
            ⋮
          </button>
        </div>

        <div className="search-box">
          <span>⌕</span>

          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </div>

        <div className="chat-list">
          {filteredChats.map((chat) => {
            const lastMessage =
              chat.messages[chat.messages.length - 1];

            return (
              <div
                className={`chat ${
                  chat.id === selectedChatId ? "active" : ""
                }`}
                key={chat.id}
                onClick={() => setSelectedChatId(chat.id)}
              >
                <div className="avatar">{chat.avatar}</div>

                <div className="chat-info">
                  <div className="chat-top">
                    <strong>{chat.name}</strong>
                    <span>{lastMessage?.time}</span>
                  </div>

                  <p>{lastMessage?.text}</p>
                </div>
              </div>
            );
          })}

          {filteredChats.length === 0 && (
            <p className="no-results">No chats found</p>
          )}
        </div>
      </aside>

      {/* Chat Window */}
      {selectedChat && (
        <main className="chat-window">
          <header className="chat-header">
            <div className="avatar">{selectedChat.avatar}</div>

            <div>
              <h2>{selectedChat.name}</h2>

              <span
                className={
                  selectedChat.online ? "online" : "offline"
                }
              >
                {selectedChat.online ? "online" : "offline"}
              </span>
            </div>
          </header>

          {/* Messages */}
          <section className="messages">
            {selectedChat.messages.map((msg) => (
              <div
                className={`message ${
                  msg.sender === "me" ? "sent" : "received"
                }`}
                key={msg.id}
              >
                <p>{msg.text}</p>
                <span>{msg.time}</span>

                {msg.sender === "me" && (
                  <span className="message-status">✓✓</span>
                )}
              </div>
            ))}
          </section>

          {/* Message Input */}
          <form className="message-input" onSubmit={sendMessage}>
            <button type="button">😊</button>

            <input
              type="text"
              placeholder="Write a message..."
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            />

            <button type="submit">➤</button>
          </form>
        </main>
      )}
    </div>
  );
}

export default App;