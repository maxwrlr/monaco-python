const path       = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const NodePlugin = require('node-polyfill-webpack-plugin');

const dev = process.argv.includes('serve');

module.exports = {
	mode: dev ? 'development' : 'production',

	entry: {
		'main':             './src/index.ts',
		'editor.worker':    'monaco-editor-core/esm/vs/editor/editor.worker.js',
		'python.ls.worker': './src/worker.ts'
	},

	output: {
		path:     path.join(__dirname, 'dist'),
		filename: '[name].min.js'
	},

	module: {
		rules: [
			{
				test: /\.css$/,
				use:  ['style-loader', 'css-loader']
			},
			{
				test: /\.ts$/,
				use:  'ts-loader'
			},
			{
				test: /\.py$/,
				use:  'raw-loader'
			},
			{
				test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
				use:  [{
					loader:  'file-loader',
					options: {
						name:       '[name].[ext]',
						outputPath: 'webfonts/'
					}
				}]
			}
		]
	},

	resolve: {
		alias: {
			'monaco-languages': 'monaco-languages/release/esm/monaco.contribution',
			// required for monaco language client
			'vscode': 'monaco-languageclient/lib/vscode-compatibility',
			// required for monaco-yaml
			'monaco-editor': 'monaco-editor-core'
		},

		extensions: ['.ts', '.js'],

		fallback: {
			// required for pyodide
			fs:   false,
			path: false,
			// required for vscode-languageserver
			net:           false,
			child_process: false
		}
	},

	plugins: [
		new HtmlPlugin({
			template: 'src/index.html',
			chunks:   ['main']
		}),
		new CopyPlugin({
			patterns: [
				{ context: 'src', from: 'lib/**/*' }
			]
		}),
		new NodePlugin()
	]
};
