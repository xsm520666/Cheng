/*
 * @CaseyCheng
 * pls...
 * callback用三元运算提高代码编写效率，复杂判断还是得用if else
 */

/**
 * 二进制函数<br/>
 * 这个自带的听说无法计算负整数的二进制，所以改用自己写的
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
 * 现在可以运算负数了，不过数字多了可能看着眼瞎<br/>
 * <s/>十进制转二进制 负数Bug挺多，不要拿它算负数
 * @param num 需要转换的数字
 * @param callback 回调函数 dsc:需要计算的十进制数<br/> temp:计算成功的二进制数字
 * @return {string}
 */
const toBin = (num, callback) => {
	//计算结果的存储池
	let temp = "";
	//用于进入正数负数判断,和num同时计算，但是不取整，因为num需要取整到了最后会一直算0，0就没法判断正数负数了
	let dsc = num;
	//保存最初的值
	const call = num;
	//先把0丢出去 干翻异常！！！
	if (num === 0) {
		callback(call, '00000000')
		return '00000000'
	}
	//如果输入值为负数，就把输入值转正
	if (Math.sign(num) === -1) num = Math.abs(num);
	while (true) {
		temp = num % 2 + temp;
		num = ~~(num /= 2)
		//用于进入正数负数判断
		dsc /= 2
		//sing为-1的时候是负数
		if (Math.sign(dsc) === -1) {
			if (dsc > -1) {
				//如何获取一个二进制数的负数符号位？
				// while (temp.length < (getBinLength(Math.abs(call)))+4) temp = "0" + temp;
				while (temp.length < (Math.ceil(Math.log2(Math.abs(call))))+2) temp = "0" + temp;
				while (temp.length%8!==0) temp="0"+temp;
				//反码，最高位不变，其它的全部反转
				for (let i = 0; i < temp.length; i++) {
					(temp[i] === "1") ?
						temp = replaceBin(temp, i, "0") : temp = replaceBin(temp, i, "1")
					//补码使用下面的addBin方法给反码+1
				}
				//听说最高位好像一直是1
				temp = replaceBin(temp, 0, "1")
				//计算补码
				addBin(temp, "1", (n1, n2, res) => temp = res)
				break
			}
		}
		//sing为1的时候是正数
		if (Math.sign(dsc) === 1) {
			//计算结束后num是正数的并且小于1时检查长度是否有八个字段，没有就往最右边添加个0
			if (dsc < 1) {
				//这里要补齐到八位数
				while (temp.length < 8) temp = "0" + temp
				break
			}
		}
	}
	if (callback) callback(call, temp)
}
/**
 * 二进制加法器
 * @param bin1 二进制1
 * @param bin2 二进制2
 * @param callback 回调函数 n1,n2:需要相加的数字 res是计算出来的返回值
 * @return {string}
 */
const addBin = (bin1, bin2, callback) => {
	let res = [];
	let addOne = 0;
	//把字符串对齐
	while (bin1.length < bin2.length) bin1 = "0" + bin1
	while (bin2.length < bin1.length) bin2 = "0" + bin2
	for (let i = bin1.length - 1; i >= 0; i--) {
		let charAt1 = +bin1.charAt(i);
		let charAt2 = +bin2.charAt(i);
		let sum = charAt1 + charAt2 + addOne;
		//逢二进一
		if (sum >= 2) {
			res[i] = sum - 2;
			addOne = 1;
		} else {
			res[i] = sum;
			addOne = 0;
		}
	}
	if (addOne > 0) res.unshift(1)
	if (callback) callback(bin1, bin2, res.join(""))
	return res.join("")
}
/**
 * 用于字符替换
 * @param str 需要替换的字符
 * @param index 字符下标
 * @param char 替换的文本
 * @return {*} 被替换的字符串
 */
const replaceBin = (str, index, char) => {
	const strAry = str.split('');
	strAry[index] = char;
	return strAry.join('');
}
/**
 * 获取一个数字所需要的二进制长度
 * @param num
 * @param callback 回调函数
 * @deprecated
 */
const getBinLength=(num,callback)=>{
	let c=0;
	while (num){
		++c;
		num>>=1;
	}
	if (callback) callback(c);
	return c;
}
/**
 * 获取一个数字所需要的二进制长度
 * @param num
 * @param callback 回调函数
 */
const getBinlength=(num,callback)=>{
	num=Math.abs(num);
	num=Math.log2(num);
	num=Math.ceil(num);
	if (callback) callback(num);
	return num;
}
module.exports = {
	toBin, addBin, replaceBin, binary,getBinLength,getBinlength
}
