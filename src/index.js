const { app, Menu, webContents } = require('electron')
const mainMenu = require('./main/MainMenu')
const shortcuts = require('./main/Shortcuts')
const TrayMenu = require('./main/TrayMenu')
const PlaybackActions = require('./main/PlaybackActions')
const AppActions = require('./main/AppActions')
const MainWindow = require('./main/MainWindow')

let mainWindow, playbackActions, appActions, trayMenu;

app.on('ready', init)

function init() {
  createWindow()
  createMenu()
  createTrayMenu()
  registerGlobalShortcuts()
}

function createWindow () {
  mainWindow = new MainWindow();
}

function createMenu() {
  mainMenu.createMenu(getPlaybackActions());
}

function createTrayMenu() {
  trayMenu = new TrayMenu(getPlaybackActions(), getAppActions());
  trayMenu.createTrayMenu();
}
function registerGlobalShortcuts() {
  shortcuts.registerGlobalShortcuts(getPlaybackActions());
}

function getPlaybackActions() {
  if (playbackActions == null) {
      playbackActions = new PlaybackActions(mainWindow.webContents);
  }
  return playbackActions;
}

function getAppActions() {
  if (appActions == null) {
      appActions = new AppActions(mainWindow);
  }
  return appActions;
}

app.on('window-all-closed', () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow == null) {
    init()
  }
})
