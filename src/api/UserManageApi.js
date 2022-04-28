import request from "@/api/index";

let api = {
	getUserInfo: '/admin/user/userlist',
	deleteUser: '/admin/user/deluser',
	addUser: '/admin/user/addUser',
	updateUser: '/admin/user/updateUser',
}

const getUserInfo = (params) => {
	return request({
		url: api.getUserInfo,
		method: 'GET',
		params,
	})
}

const deleteUser = (params) => {
	return request({
		url: api.deleteUser,
		method: "GET",
		params,
	})
}

const addUser = (data) => {
	return request({
		url: api.addUser,
		method: "POST",
		data,
	})
}

const updateUser = (data) => {
	return request({
		url:api.updateUser,
		method:"POST",
		data,
	})
}

export {
	getUserInfo, deleteUser, addUser,updateUser,
}
