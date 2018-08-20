
let mainWindow;

function AppActions(mainWindow) {
  this.mainWindow = mainWindow;
}

AppActions.prototype.showWindow = function() {
    this.mainWindow.show();
}

module.exports = AppActions
