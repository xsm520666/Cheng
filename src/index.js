/*
 * @CaseyCheng
 * @Date: 2021-11-11
 * pls...
 */

"use strict";
const array = require('./array')
const dom = require('./dom')
const date = require("./calculateDate");
const bin=require("./bin")
var $ = function () {
	return {
		array, dom, date,bin
	}
	//我懂了，方法定义结束后加上()是个自执行函数通常用于产生闭包
}();
module.exports.$ = $;
