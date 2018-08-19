let playbackActions = require('./PlaybackActions.js')
let { globalShortcut } = require('electron')

function registerGlobalShortcuts(webContents) {
	globalShortcut.register('MediaPlayPause', () => {
      playbackActions.playPause(webContents);
    });

    globalShortcut.register('MediaNextTrack', () => {
      playbackActions.next(webContents);
    });

    globalShortcut.register('MediaPreviousTrack', () => {
      playbackActions.previous(webContents);
    });
}

module.exports.registerGlobalShortcuts = registerGlobalShortcuts
