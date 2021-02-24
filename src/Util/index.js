const axios = require('axios').default;



export const requestServer = async function(_url, _method, _params) {
	let token = '';
	let params = {};
	let data = {};

	if(_method === 'GET')
		params = _params;
	else if(_method === 'POST' || _method === 'PUT' || _method === 'DELETE')
		data = _params;
	
	// sessionStorage['token'] = 사용자로부터 받은 토큰 -> 로그인시에 서버요청 -> 응답으로 토큰이 들어와있음 -> 응답받은 토큰을 -> sessionStorage['token'] 여기에 저장

	if(sessionStorage['token'])
		token = "Bearer " + sessionStorage['token'];
	
	let respData = null;
	let code = 200;
	
    // IE 지원
	document.execCommand('ClearAuthenticationCache', 'false');
	
	try {
		let resp = await axios({
			method: _method,
			url: 'http://localhost:8081/' + _url,
			params: params, // params null 
			data: data, // null  params
			headers: {
				Authorization: token
			}
		});

		respData = resp.data;
		code = resp.status;
	} catch(e) {
		respData = e.response.data;
		code = e.response.status;
	}

	return {
		code: code, // http 상태코드 200, 404, 403, 401
		body: respData // json 값이 들어감
	};
}



export const dateForm = function(date, type) {
	if(date === null)
		return '';
		
	date = new Date(date);
	var year = date.getFullYear();
	var month = (date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1);
	var day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();

	var hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
	var min = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
	var sec = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds();

	if(type === 'full')
		return year + '.' + month + '.' + day + ' ' + hour + ':' + min + ':' + sec;
	else if(type === 'min')
		return year + '.' + month + '.' + day;
}