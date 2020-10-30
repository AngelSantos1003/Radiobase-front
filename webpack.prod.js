const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const Dotenv = require('dotenv-webpack');
const TerserPlugin = require('terser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const config = require('./webpack.config');

module.exports = merge(config, {
	mode: 'production',
	devtool: 'nosources-source-map',
	output: {
		path: path.resolve(__dirname, './dist'),
		pathinfo: false,
		filename: 'static/[name].[contenthash:8].js',
		chunkFilename: 'static/[name].[contenthash:8].chunk.js',
		devtoolModuleFilenameTemplate: info =>
			path
				.relative(path.join(__dirname, './src'), info.absoluteResourcePath)
				.replace(/\\/g, '/'),
	},
	optimization: {
		minimize: true,
		minimizer: [
			new TerserPlugin({
				terserOptions: {
					parse: {
						ecma: 8,
					},
					compress: {
						ecma: 5,
						warnings: false,
						comparisons: false,
						inline: 2,
					},
					mangle: {
						safari10: true,
					},
					output: {
						ecma: 5,
						comments: false,
						ascii_only: true,
					},
				},
				parallel: true,
				cache: true,
				sourceMap: true,
			}),
			new OptimizeCSSAssetsPlugin({
				cssProcessorOptions: {
					map: {
						inline: false,
						annotation: true,
					},
				},
			}),
		],
		runtimeChunk: true,
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
		new CopyWebpackPlugin([{ from: 'public' }]),
		new webpack.LoaderOptionsPlugin({
			minimize: true,
			debug: false,
		}),
		new HtmlWebpackPlugin({
			inject: true,
			template: path.join(__dirname, 'public/index.html'),
			minify: {
				removeComments: true,
				collapseWhitespace: true,
				removeRedundantAttributes: true,
				useShortDoctype: true,
				removeStyleLinkTypeAttributes: true,
				minifyJS: true,
				minifyCSS: true,
				minifyURLs: true,
			},
		}),
		new BundleAnalyzerPlugin(),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('production'),
		}),
	],
	stats: {
		colors: false,
		hash: true,
		timings: true,
		assets: true,
		chunks: true,
		chunkModules: true,
		modules: true,
		children: true,
	},
});
