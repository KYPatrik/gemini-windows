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
Download the zip from the RELEASES https://github.com/KYPatrik/gemini-windows/releases/tag/Gemini

OR

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

### ⚠️ Important: Antivirus & Browser Warnings

**You may see security warnings when downloading or running this application. This is NORMAL and expected.**

#### Why does this happen?
- **Unsigned Application**: The .exe is not digitally signed with an expensive code signing certificate ($200-400/year)
- **Windows SmartScreen**: Warns about applications from unknown publishers
- **Browser Protection**: Chrome/Edge may flag the download as potentially unsafe
- **False Positive**: Antivirus software sometimes misidentifies Electron apps

#### Is it actually safe?
**YES!** This is open-source software. You can:
1. Review all the code in this repository
2. Build the application yourself using `npm run build`
3. See that it only loads the official Gemini website with no modifications

#### How to bypass the warnings:

**Windows SmartScreen:**
1. Click "More info" when you see the warning
2. Click "Run anyway"

**Browser Download Warning:**
1. Click the download warning
2. Select "Keep" or "Download anyway"

**Windows Defender:**
1. Allow the file in Windows Security
2. Add to exclusions if needed

#### Alternative: Portable Version
If you're uncomfortable with the installer, extract and use the files from the `dist/win-unpacked` folder directly. No installation required!

## 📦 Built With

- [Electron](https://www.electronjs.org/) - Framework for building native applications with web technologies
- [Electron Builder](https://www.electron.build/) - Complete solution to package and build Electron apps

## 📝 License

MIT
