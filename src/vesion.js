/*
 * @CaseyCheng
 * pls...
 */
let version=1.0;
const sayHello=name=>`Hello ${name}`;
exports.version=version;
exports.sayHello=sayHello;
module.exports={
	version,
	sayHello
}
