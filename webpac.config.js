const path=require("path")
module.exports={
	mode:"development",
	entry:{
        index:"./src/index.js"
    },
	output:{
		path:path.resolve(__dirname,"dist"),
		filename:"[name].js",
		library:"Cheng",
		libtarget:"umd",
		externals: {
			commonjs: 'lodash',
			commonjs2: 'lodash',
			amd: 'lodash',
			root: '_',
		},
		mode: "none",
		libraryExport:"default"
	}
}
