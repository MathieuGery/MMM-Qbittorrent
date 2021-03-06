/* Magic Mirror
 * Module: MMM-qBittorrent
 *
 * By Mathieu Gery, https://github.com/MathieuGery/MMM-qBittorrent
 * MIT Licensed.
 */

const NodeHelper = require('node_helper');

module.exports = NodeHelper.create({
	start: function() {
		//console.log('Starting node_helper for: ' + this.name);
	},

	getStats: function(payload) {
		let identifier = payload.identifier;
		const stats = { ratio: 10,
			downloadSpeed: 100,
			uploadSpeed: 200,
			leftSpace: 50
		};
		console.error(this.name + ' error when fetching data: ' + stats.ratio);
		this.sendSocketNotification('STATS_RESULT', {identifier: identifier, stats: stats} );
	},

	socketNotificationReceived: function(notification, payload) {
		if (notification === 'GET_STATS') {
			this.getStats(payload);
		}
	}

});
