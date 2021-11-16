/*
 * @CaseyCheng
 * pls...
 */

module.exports = {
	entry: "./src",
	output: {
		path: __dirname + "/dist",
		filename: "bundle.js",
		sourceMapFilename: "sourceMap",
		// tracableModuleFilename: "[name]-[module]-[hash].js"
	},
	// module: {
	// 	loaders: [
	// 		{ test: /\.css$/, loader: "style-loader!css-loader" }
	// 	]
	// }
};
