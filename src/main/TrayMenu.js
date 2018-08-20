const {Tray, Menu} = require('electron')
var platform = require('os').platform();
const imageFolder = __dirname + '/../assets/icons';

let tray, trayImage;

function createTrayMenu(playbackActions, appActions) {
  if (platform == 'darwin') {
    trayImage = imageFolder + '/osx/trayTemplate.png';
  } else if (platform == 'win32') {
    trayImage = imageFolder + '/win/tray.ico';
  }

  tray = new Tray(trayImage);

  if (platform == 'darwin') {
    tray.setPressedImage(imageFolder + '/osx/trayHighlight.png');
  }

  tray.setToolTip('PlayMe');

  const trayMenu = Menu.buildFromTemplate([
    {label: 'Play/Pause', click() {
      playbackActions.playPause();
    }},
    {label: 'Next Track', click() {
      playbackActions.next();
    }},
    {label: 'Previous Track', click() {
      playbackActions.previous();
    }},

    {type: 'separator'},

    {label: 'Show Window', click() {
      appActions.showWindow();
    }},

    {type: 'separator'},

    {label: 'Quit PlayMe', role: 'quit'}
  ]);

  tray.setContextMenu(trayMenu);

}

module.exports.createTrayMenu = createTrayMenu
