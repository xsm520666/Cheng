const {$} = require("../src");
for (let i = 0; i < 10000; i++) {
	$.bin.toBin(i, (o, v) => {
		console.log(`我是二进制函数：${o}的结果是${v}`)
	})
}
console.log('\n')
for (let i = -10000; i < 0; i++) {
	$.bin.toBin(i, (o, v) => {
		console.log(`我是二进制函数：${o}的结果是${v}`)
	})
}
// $.bin.toBin(999,(o,v)=>{
// 	console.log(`我是二进制函数：${o}的结果是${v}`)
// })
// $.bin.toBin(-254,(o,v)=>{
// 	console.log(`我是二进制函数：${o}的结果是${v}`)
// })
// for (let i = 0; i < 1000; i++) {
// 	$.bin.toBin(i, (o, v) => {
// 		console.log(`${v}`)
// 	})
// }
// console.log('\n')
// for (let i = -1000; i < 0; i++) {
// 	$.bin.toBin(i, (o, v) => {
// 		console.log(`${v}`)
// 	})
// }
