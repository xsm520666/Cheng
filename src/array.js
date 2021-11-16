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
const Disrupt = (Array, callback) => {
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
module.exports={
	bubbleSort,
    Disrupt,
    selectSorc
}
