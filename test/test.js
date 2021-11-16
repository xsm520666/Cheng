/*
 * @CaseyCheng
 * pls...
 */
//这是测试单元
const {$}=require('../src');
data = {
	array: [7, 6, 5, 3, 9, 2, 1, 8, 4],
	arrayy: [7, 6, 5, 3, 9, 2, 1, 8, 4],
	date: {year: 2008, month: 8, day: 8},
	users: [
		{id: 1, name: "a", age: 18},
		{id: 2, name: "b", age: 43},
		{id: 3, name: "c", age: 21}
	]
};
//使用冒泡排序重新排列data.array数组
$.array.bubbleSort(data.array, (v) => {
	console.log(`我是冒泡算法排序的数组：${v}`)
});
//使用回调函数返回日期

$.date.CalculateDate(2008, 8, 8, (v) => {
	console.log(`我是回调函数：已经过了${v}天了`)
})
//直接计算天数，不用回调函数
console.log(`我是异步返回：已经过了${$.date.CalculateDate(2008, 8, 8).sum}天了`);
//使用对象里的toString方法返回日期
$.date.CalculateDate(2008, 8, 8).toString();
console.log(`我是选择排序前的数组${data.arrayy}`)
$.array.selectSort(data.arrayy, (v, i) => {
	console.log(`我是选择排序后的数组${v}`)
})
console.log(`我是打乱前的数组：${data.arrayy}`)
$.array.Disrupt(data.arrayy, (v) => {
	console.log(`我专门打乱数组：${v}`)
})

