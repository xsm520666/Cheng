/*
 * @CaseyCheng
 * @Date: 2021-11-11
 * pls...
 */

//测试下列方法使用的data
"use strict";

var data = {
	array: [7, 6, 5, 3, 9, 2, 1, 8, 4],
	arrayy: [7, 6, 5, 3, 9, 2, 1, 8, 4],
	date: {year: 2008, month: 8, day: 8},
	users: [
		{id: 1, name: "a", age: 18},
		{id: 2, name: "b", age: 43},
		{id: 3, name: "c", age: 21}
	]
};
const {bubbleSort, Disrupt, selectSorc} = require('./array.js')
const {getClass, getId} = require('./dom')
const {CalculateDate} = require("./CalculateDate");

var $ = function () {
	//数组操作
	let array = {
		bubbleSort: bubbleSort,
		selectSort: selectSorc,
		Disrupt: Disrupt
	}
	//页面文档操作
	let dom = {
		getClass,
		getId
	}
	//时间计算
	let date = {
		CalculateDate
	}
	return {
		array, dom, date
	}
}($ || {})
module.exports.$ = $;
