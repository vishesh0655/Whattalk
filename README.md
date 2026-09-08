# Whattalk
A privacy-focused, Telegram-inspired messaging app with end-to-end encryption, local-first data storage, and Bluetooth-based offline peer-to-peer and mesh communication.
# WhatTalk

**WhatTalk** is a privacy-focused, Telegram-inspired messaging application designed to provide a modern messaging experience while reducing dependence on centralized servers and cloud-based data storage.

The application combines **real-time internet messaging** with **local-first data storage** and a unique **offline communication system** that enables users to exchange messages through nearby devices using Bluetooth and peer-to-peer mesh networking.

Unlike traditional messaging platforms where conversations, media, and files are heavily dependent on centralized cloud infrastructure, WhatTalk explores an architecture in which user data is primarily stored and managed on **user-controlled devices**, while servers are used only where necessary for functions such as authentication, discovery, signaling, and internet-based communication.

### 🌐 Online + 📡 Offline Communication

WhatTalk is designed to operate in two complementary modes:

- **Online Mode:** Real-time messaging over the internet with a Telegram-like experience.
- **Offline Mode:** Nearby peer-to-peer communication using Bluetooth and mesh networking when internet connectivity is unavailable.

The offline system aims to allow messages to travel between nearby devices, potentially using multiple devices as relay nodes:

```text
📱 User A
    ↓ Bluetooth
📱 User B
    ↓ Bluetooth
📱 User C
    ↓ Bluetooth
📱 User D
```

This creates the possibility of communicating across a local mesh network without requiring every device to have direct internet connectivity.

### 🔐 Privacy & Local-First Architecture

WhatTalk is built around a **local-first and privacy-focused design philosophy**.

The project aims to:

- Store conversations primarily on users' devices.
- Minimize centralized storage of messages and media.
- Use end-to-end encryption for private communication.
- Keep sensitive message content away from intermediate relay devices.
- Reduce dependence on large centralized storage infrastructure.
- Allow users to maintain greater control over their own data.

### 🚀 Core Features

- Real-time one-to-one messaging
- Group conversations
- User profiles and usernames
- Message replies, editing, deletion, and reactions
- Typing indicators and read receipts
- Image, video, document, and file sharing
- Voice messages
- End-to-end encrypted communication
- Local-first message and media storage
- Nearby device discovery
- Bluetooth peer-to-peer messaging
- Offline message delivery
- Store-and-forward communication
- Multi-hop mesh networking
- Automatic online/offline communication switching

### 🧠 Project Focus

Beyond being a messaging application, WhatTalk is an exploration of **distributed systems, peer-to-peer networking, mobile communication, cryptography, local-first software architecture, and resilient communication systems**.

The long-term goal is to create a messenger that provides the usability users expect from modern applications like Telegram while introducing an additional communication layer that can function when conventional internet connectivity is unavailable.

> **WhatTalk — Modern messaging, user-owned data, and communication beyond the internet.**

🚧 **Status:** Active development
