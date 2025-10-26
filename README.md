# Gemini Desktop App

A native Windows desktop application wrapper for Google Gemini AI, providing a standalone app experience for accessing Gemini without opening a web browser.

## 🎯 Purpose

This application transforms the Google Gemini web interface into a native Windows desktop application using Electron. Instead of opening Gemini in a browser tab, you can run it as a standalone app with its own icon, window, and taskbar presence - just like any other native Windows application.

## ✨ Features

- **Native Desktop Experience**: Run Gemini as a dedicated Windows application
- **Custom Branding**: Uses custom Gemini icons for the window and taskbar
- **Direct Integration**: Loads the official Gemini website directly - no proxy or modified code
- **Secure Authentication**: Safe to log in with your Google account (same security as using Chrome/Edge)
- **Isolated Environment**: Runs in its own window separate from your browser
- **Always Accessible**: Quick access from your desktop or Start menu

## 🚀 Getting Started

### Prerequisites

- Node.js 16 or newer: https://nodejs.org/
- Windows 10 or newer

### Installation

1. Clone or download this repository
2. Install dependencies:
```bash
npm install
```

### Running in Development Mode

```bash
npm start
```

### Building a Windows Installer

To create a standalone installer (.exe):

```bash
npm run build
```

The installer will be created in the `dist` folder. You can then distribute this installer to install the app on any Windows machine without requiring Node.js.

## 🔒 Security

This application is safe to use with your Google account because:
- It loads the official `https://gemini.google.com/app/` directly
- Uses the same Chromium engine as Google Chrome
- No intermediate code intercepts your data
- Employs security best practices (`contextIsolation`, `nodeIntegration: false`)

## 📦 Built With

- [Electron](https://www.electronjs.org/) - Framework for building native applications with web technologies
- [Electron Builder](https://www.electron.build/) - Complete solution to package and build Electron apps

## 📝 License

MIT
