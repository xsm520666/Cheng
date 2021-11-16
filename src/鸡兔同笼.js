/**
 * Chicken and rabbit in the same cage
 * @param foot
 * @param head
 */
const ra1 = (foot,head) => {
	const All_= foot;
	const AllHead_= head;
	let number = All_/2;
	let rabbit = number-AllHead_;
	let chicken=AllHead_-rabbit;
	console.log(`兔子有${rabbit}只，鸡有${chicken}只`);
}
exports.rabbit=ra1;


