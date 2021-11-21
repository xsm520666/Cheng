/*
 * @CaseyCheng
 * pls...
 */
/**
 * bubbleSort is a function that sorts an array of numbers using the bubble sort algorithm.
 * @param Array Variable array
 * @param callback callback
 */
const bubbleSort = (Array, callback) => {
	//i为该数组长度 j为一个新变量
	let i = Array.length, j;
	//声明一个临时存储池
	let temp;
	//while循环数组的长度
	while (i > 0) {
		//i-1是操作数，该操作数一般为Array.length-1
		for (j = 0; j < i - 1; j++) {
			//如果前一个数大于后一个数
			if (Array[j] > Array[j + 1]) {
				//临时存储前一个数字
				temp = Array[j];
				//前一个索引的空间用于存放后一个元素的值
				Array[j] = Array[j + 1];
				//取出临时存储的数字并放入后一个元素的空间
				Array[j + 1] = temp;
			}
		}
		//操作数-1
		i--;
	}
	if (callback) {
		callback(Array);
	}
}
/**
 * 打乱这个数组
 * @param Array 需要打乱的数组
 * @param callback 回调函数
 * @return {*} 被打乱的数组
 * @constructor
 */
const disrupt = (Array, callback) => {
	let i = Array.length;
	let temp, j;
	while (i > 0) {
		j = Math.floor(Math.random() * i);
		i--;
		temp = Array[i];
		Array[i] = Array[j];
		Array[j] = temp;
	}
	if (callback) {
		callback(Array);
	}
	return Array;
}
/**
 * selectSort is a function used For array sorting
 * @param Array Array
 * @param callback 回调函数
 */
const selectSorc = (Array, callback) => {
	let minIndex;
	//找出最小位数的索引放入minIndex
	for (let j = 0; j < Array.length - 1; j++) {
		//定义最小索引位为0
		minIndex = j;
		for (let i = j + 1; i < Array.length; i++) {
			if (Array[i] < Array[minIndex]) {
				minIndex = i;
			}
		}
		//将temp设置为数组里的第一个数字
		let temp = Array[j];
		//数组里的第一个数字设置为最小索引的数字
		Array[j] = Array[minIndex];
		//再将temp里的数字存入最小数字的索引位置
		Array[minIndex] = temp;
	}
	
	//回调函数
	if (callback) {
		callback(Array, minIndex);
	}
}
/**
 * 计算1+2+3...+100的和
 * @param callback 回调函数
 * @return {number} number
 */
const sum = (callback) => {
	let sum = 0;
	for (let i = 1; i < 101; i++) {
		sum += i;
	}
	if (callback) {
		callback(sum);
	}
	return sum;
}
/**
 * 计算两个小数
 * @param num1 num1
 * @param num2 num2
 * @param callback 回调函数 n1,n2,v 第一个数字，第二个数字，返回的结果
 * @return {number} num
 * @deprecated 计算1.01和2.002会产生非常离谱的错误
 */
const addNum = (num1, num2, callback) => {
	//转化为字符串
	num1 = num1.toString();
	num2 = num2.toString();
	//查看.后面的长度
	let a, b;
	if (num1.indexOf(".") !== -1) {
		a = num1.split(".")[1].length;
	}
	if (num2.indexOf(".") !== -1) {
		b = num2.split(".")[1].length;
	}
	//看看谁比谁大
	let max = a;
	if (a < b) max = b;
	//计算倍数关系
	let multiple = 1;
	//假设max为2就回执行两次*10就会将结果扩大一百倍
	for (let i = 0; i < max; i++) {
		multiple *= 10;
	}
	//给小数乘上倍数变成
	num1 *= multiple;
	num2 *= multiple;
	// 返回和并除掉倍数
	let number = (num1 + num2) / multiple;
	if (callback) callback((num1/multiple),(num2/multiple),number)
	return number;
}
const numAdd=(num1,num2,callback)=>{
	num1=num1.toString();
	num2=num2.toString();
	let index1=num1.indexOf(".");
	let index2=num2.indexOf(".");
	let ws1=0,ws2=0;
	if (index1!==-1){
		ws1=num1.split(".")[1].length;
	}
	if (index2!==-1){
		ws2=num2.split(".")[1].length;
	}
	//谁大谁小
	let bigger=(ws1>ws2) ?ws1:ws2;
	let smaller=(ws1<ws2) ?ws1:ws2;
	
	
}
module.exports = {
	bubbleSort,
	disrupt,
	selectSorc,
	sum,
	addNum
}
