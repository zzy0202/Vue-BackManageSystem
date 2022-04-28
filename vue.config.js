module.exports = {
	publicPath: "/",
	devServer:{
		port:8080,
		proxy:{
			'^/api':{
				target:"http://mall.cpengx.cn",
				pathRewrite:{
					'^/api':'',
				}
			}
		}
	}
}
