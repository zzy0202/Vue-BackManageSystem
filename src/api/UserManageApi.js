import request from "@/api/index";

let api = {
	getUserInfo: '/admin/user/userlist',
	deleteUser:'/admin/user/deluser',
}

const getUserInfo = (params) =>{
	return request({
		url:api.getUserInfo,
		method:'GET',
		params,
	})
}

const deleteUser = (params) => {
	return request({
		url:api.deleteUser,
		method:"GET",
		params,
	})
}

export {
	getUserInfo,deleteUser
}
