const path = require('path');

module.exports = {
	publicPath: process.env.VUE_APP_PUBLIC_PATH,
	transpileDependencies: ["dom7", "ssr-window", "swiper"],
	pluginOptions: {
		'style-resources-loader': {
			preProcessor: 'scss',
			patterns: [
				path.resolve(__dirname, "src/styles/globalSettings.scss")
			]
		}
	}
};
