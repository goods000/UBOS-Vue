function isUndefined(input) {
	var is = typeof input === 'undefined';
    return is;
}

function isBlank(str) {
	if(isUndefined(str)){return true;}
	
    return !str || !/\S/.test(str)
}

function isEmpty(str) {
	if(isBlank(str)){return false;}
	return str.length === 0;
}

function username(str) {
	if(isBlank(str)){return false;}
	var pattern =/^[a-zA-Z0-9_]{0,}$/;
    return pattern.test(str);
}

function isMobile(str) {
	if(isBlank(str)){return false;}
	var pattern =/^1(3|4|5|6|7|8|9)\d{9}$/;
	return pattern.test(str);
}

function isEmail(str) {
	if(isBlank(str)){return false;}
	var pattern =/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/g;
	return pattern.test(str);
}

function  isLength(str,len){
	if(isBlank(str)){return false;}
	return str.length >= len;
}

function isChinese(str) {
	if(isBlank(str)){return false;}
	var pattern =/^[\u0391-\uFFE5]+$/g;
    return pattern.test(str);
}

 //是否为英文字母
function isAbc(str) {
	if(isBlank(str)){return false;}
	var pattern =/^[a-zA-Z]+$/g;
    return pattern.test(str);
}

function isDecimal(str) {
	if(isBlank(str)){return false;}
	var pattern =/^[-+]?([0-9]+|\.[0-9]+|[0-9]+\.[0-9]+)$/;
	return pattern.test(str);
}