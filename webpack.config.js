const path = require('path');

module.exports = {
  mode: 'production',
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'docs'),
		filename: 'main.js'
	},
	devServer: {
		contentBase: path.join(__dirname, 'docs'),
    open: true,
    inline: true,
    hot: true
	}
}
