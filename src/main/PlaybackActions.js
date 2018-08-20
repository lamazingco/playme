
class PlaybackActions {
	constructor(webContents) {
		this.webContents = webContents;
	}

	playPause() {
		this.webContents.executeJavaScript(`document.getElementsByClassName('play-pause-button')[0].click()`);
	}

	next() {
		this.webContents.executeJavaScript(`document.getElementsByClassName('next-button')[0].click()`)
	}

	previous() {
		this.webContents.executeJavaScript(`document.getElementsByClassName('previous-button')[0].click()`)
	}
}

module.exports = PlaybackActions
