const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const Dotenv = require('dotenv-webpack');
const config = require('./webpack.config');

module.exports = merge(config, {
	mode: 'development',
	bail: false,
	devtool: 'inline-source-map',
	output: {
		pathinfo: true,
		filename: 'static/bundle.js',
		chunkFilename: 'static/[name].chunk.js',
		devtoolModuleFilenameTemplate: info =>
			path.resolve(info.absoluteResourcePath).replace(/\\/g, '/'),
	},
	devServer: {
		contentBase: path.join(__dirname, 'public'),
		hot: true,
		host: 'localhost',
		open: true,
		compress: true,
		port: 2018,
		historyApiFallback: true,
		allowedHosts: ['localhost:2018'],
	},
	optimization: {
		minimize: false,
		splitChunks: {
			cacheGroups: {
				styles: {
					name: 'styles',
					test: /\.css$/,
					chunks: 'all',
					enforce: true,
				},
			},
		},
	},
	plugins: [
		new Dotenv({
			path: './.env',
		}),
		new webpack.HotModuleReplacementPlugin(),
	],
});
