/*
 * @CaseyCheng
 * pls...
 */
/**
 * CalculateDate is a funcion Used to calculate how many days have passed in the year
 * @param year 年
 * @param month 月
 * @param day 日
 * @param callback 回调函数
 * @constructor
 * @returns sum 返回这一年过了多少天<br/>
 * @returns toString 格式化并输出
 */
const CalculateDate = (year, month, day, callback) => {
	let total = 0;
	const months = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
		months[1] = 29;
	} else {
		months[1] = 28;
	}
	//用户输入的月份-1次，因为输入的月份不会参与计算
	for (let i = 0; i < month - 1; i++) {
		total += months[i];
	}
	//加上用户输入的天数
	total += day;
	if (callback) {
		callback(total);
	}
	
	//返回一个字符串
	const toString = (callback) => {
		let str = `我是toString：${year}年${month}月${day}日已经过了${total}天`
		if (callback) {
			callback(str);
		} else {
			console.log(str);
		}
	}
	return {
		sum: total,
		toString
	}
}
module.exports={
	CalculateDate
}
