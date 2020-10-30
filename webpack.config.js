const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const MomentLocalesPlugin = require('moment-locales-webpack-plugin');

module.exports = {
	entry: ['./src/index.js'].filter(Boolean),
	output: {
		publicPath: '/',
	},
	optimization: {
		splitChunks: {
			chunks: 'all',
			name: false,
		},
		runtimeChunk: true,
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.(jpg|jpeg|png|gif)$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'url-loader',
						options: { name: 'img/[name].[ext]', limit: 10000 },
					},
				],
			},
			{
				test: /\.(eot|ttf|woff|woff2|svg|otf)$/,
				use: [{ loader: 'file-loader' }],
			},
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader'],
			},
		],
	},
	plugins: [
		new CleanWebpackPlugin(['dist']),
		new HtmlWebpackPlugin({
			template: './public/index.html',
			hash: true,
			chunksSortMode: 'none',
			minify: {
				removeComments: true,
				collapseWhitespace: true,
			},
		}),
		new MiniCssExtractPlugin({
			filename: 'css/[name].[contenthash:8].css',
			chunkFilename: 'css/[name].[contenthash:8].chunk.css',
		}),
		new MomentLocalesPlugin({
			localesToKeep: ['es'],
		}),
	],
	resolve: {
		extensions: ['.js'],
		alias: {
			appActions: path.resolve(__dirname, './src/AppActions'),
			api: path.resolve(__dirname, './src/api/'),
			appUtil: path.resolve(__dirname, './src/AppUtil/'),
			constants: path.resolve(__dirname, './src/constants/'),
			components: path.resolve(__dirname, './src/components/'),
			containers: path.resolve(__dirname, './src/containers/'),
			util: path.resolve(__dirname, './src/util/'),
			actions: path.resolve(__dirname, './src/redux/actions/'),
			reducers: path.resolve(__dirname, './src/redux/reducers/'),
			selectors: path.resolve(__dirname, './src/redux/selectors/'),
		},
	},
};
