import {
	$http
} from '@escook/request-miniprogram'
 
import { _api_root } from './api'
 
const service = $http
// 请求的根路径
 $http.baseUrl = _api_root
// 请求拦截器
$http.beforeRequest = function(options) {
	uni.showLoading({
		title: '数据加载中...'
	})
	// // 判断请求的是否为有权限的 API 接口
	// if (options.url.indexOf('/my/') !== -1) {
	// 	// 为请求头添加身份认证字段
	// 	options.header = {
	// 		// 字段的值可以直接从 vuex 中进行获取
	// 		Authorization: store.state.m_user.token,
	// 	}
	// }
}
// 响应拦截器
$http.afterRequest = function() {
	uni.hideLoading()
}
 
export default service