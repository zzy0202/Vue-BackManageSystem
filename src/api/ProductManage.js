import request from "@/api/index";

const productApi = {
	getProductList: '/admin/product/productlist'
}

const getProductList = (params) => {
	return request({
		url: productApi.getProductList,
		method: "GET",
		params,
	})
}

export {
	getProductList,
}
