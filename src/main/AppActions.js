
class AppActions {
  constructor(mainWindow) {
    this.mainWindow = mainWindow;
  }

  showWindow() {
      this.mainWindow.show();
  }
}

module.exports = AppActions
