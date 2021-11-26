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
$.bin.toBin(256,(o,v)=>{
	console.log(`我是二进制函数：${o}的结果是${v}`)
})
$.bin.toBin(-256,(o,v)=>{
	console.log(`我是二进制函数：${o}的结果是${v}`)
})
