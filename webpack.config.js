//noinspection JSUnresolvedVariable
module.exports = {
	context: __dirname + "/app",
	entry: {
		javascript: "./app.js",
		html: "./index.html"
	},

	output: {
		filename: "app.js",
		path: __dirname + "/dist"
	},

	resolve: {
		alias: {
			jquery: "js/jquery.js"
		}
	},

	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loaders: ["react-hot", "babel?presets[]=es2015&presets[]=react"]
			},
			{
				test: /\.html$/,
				loader: "file?name=[name].[ext]"
			}
		]
	}

};
