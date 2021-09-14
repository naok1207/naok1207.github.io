const path = require('path');

module.exports = {
  mode: 'development',
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: 'main.js'
	},
	devServer: {
		contentBase: path.join(__dirname, 'public'),
    open: true,
    inline: true,
    hot: true
	}
}
