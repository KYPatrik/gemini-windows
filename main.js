const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    icon: path.join(__dirname, 'google-gemini-icon.ico'),
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      webviewTag: false
    },
    autoHideMenuBar: false,
    title: 'Gemini'
  });

  // Gemini oldal betöltése
  mainWindow.loadURL('https://gemini.google.com/');

  // DevTools megnyitása (opcionális, development módban)
  // mainWindow.webContents.openDevTools();

  // Ablak címének beállítása
  mainWindow.on('page-title-updated', (event) => {
    event.preventDefault();
  });
}

// Amikor az Electron inicializálása kész
app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    // macOS-en újra létrehozza az ablakot ha rákattintanak a dock ikonra
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

// Kilépés amikor minden ablak bezárult (kivéve macOS-en)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
