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
	if (callback) callback((num1 / multiple), (num2 / multiple), number)
	return number;
}
/**
 * 计算给定的两个小数
 * @param num1 数字1
 * @param num2 数字2
 * @param callback 回调函数 n1,n2,v第一个数字，第二个数字，计算的结果
 * @return {number} num
 */
const numAdd = (num1, num2, callback) => {
	//转化为字符串
	num1 = num1.toString();
	num2 = num2.toString();
	//查看.在索引中的位置
	let index1 = num1.indexOf(".");
	let index2 = num2.indexOf(".");
	let ws1 = 0, ws2 = 0;
	//如果索引结果为不是-1就查看.后面字符的长度
	if (index1 !== -1) {
		ws1 = num1.split(".")[1].length;
	}
	if (index2 !== -1) {
		ws2 = num2.split(".")[1].length;
	}
	//选择大的哪一个数字
	let bigger = (ws1 > ws2) ? ws1 : ws2;
	//选择小的哪一个数字
	let smaller = (ws1 < ws2) ? ws1 : ws2;
	let zerosCount = bigger - smaller;
	//去除num里面的.
	num1 = num1.replace(".", "");
	num2 = num2.replace(".", "");
	if (ws1 === smaller) {
		for (let i = 0; i < zerosCount; i++) {
			num1 += "0";
		}
	} else {
		for (let i = 0; i < zerosCount; i++) {
			num2 += "0"
		}
	}
	let number = parseInt(num1) + parseInt(num2);
	let beishu = 1;
	for (let i = 0; i < beishu; i++) {
		beishu *= 10;
	}
	number /= beishu;
	if (callback) {
		callback((num1 / beishu), (num2 / beishu), number)
	}
	return number;
	
}
/**
 * 二进制函数
 * @param num 需要转换的数字
 * @param callback 回调函数 <br/>
 * num返回需要计算的数字<br/>
 * res返回结果
 * @return {string}
 */
const binary = (num, callback) => {
	const res = parseInt(num).toString(2)
	if (callback) callback(num, res)
	return res
}
/**
 * 十进制转二进制
 * @param num 需要转换的数字
 * @param callback 回调函数 dsc:需要计算的十进制数<br/> temp:计算成功的二进制数字
 * @return {string}
 */
const binary1 = (num, callback) => {
	let temp = []
	let dsc = num;
	while (true) {
		//语义分析
		if (num % 2 === 0) {
			temp.push(0)
			num /= 2
		}
		if (num % 2 !== 0) {
			temp.push(1)
			num /= 2
		}
		
		if (Math.sign(num) === -1) {
			//-1的时候是负数
			if (num > -1) {
				//TODO 还差上补码
				for (let i = 0; i < temp.length; i++) {
					if (temp[i]===1){
						temp[i]=0
					}else {
						temp[i]=1
					}
				}
				break
			}
		}
		if (Math.sign(num) === 1) {
			//1的时候是整数
			if (num < 1) break
		}
	}
	//去掉由数组转化为String产生的","
	temp.reverse()
	temp = temp.toString().replaceAll(",", "")
	if (callback) callback(dsc, temp.toString())
	return temp.toString()
}
module.exports = {
	bubbleSort,
	disrupt,
	selectSorc,
	sum,
	addNum,
	numAdd,
	binary,
	binary1
}
