/*
 * @CaseyCheng
 * pls...
 */
/**
 * 获取id
 * @param id String
 * @param callback 回调函数
 * @return {HTMLElement} id元素
 */
const getId = (id, callback) => {
	let element = document.getElementById(id);
	if (callback) {
		callback(element);
	}
	return element;
}
const getClass = (cla, callback) => {
	const className = document.getElementsByClassName(cla);
	if (callback) {
		callback(className);
	}
	return className;
}
module.exports={
	getId,
    getClass
}
