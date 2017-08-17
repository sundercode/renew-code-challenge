var webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: "./src/index.js",
  externals: {
    'cheerio': 'window',
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true
  },
  module: {
	loaders: [
		{
			test: /\.js|.jsx?$/,
			exclude: /(node_modules|bower_components)/,
			loader: 'babel-loader',
			query: {
			  presets: ['react', 'es2015', 'stage-0'],
			  plugins: ['react-html-attrs', 'transform-class-properties',
						 'transform-decorators-legacy']
			}
		},
		{ test: /\.css$/,
			loader: "style-loader!css-loader",
		},
	]
  },
  output: {
	path: __dirname,
	filename: "bundle.js"
  }
};
