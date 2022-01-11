export function convert(arr) {
	// get the array, and flip it
	let binaryArray = [];
	let copyArray = [...arr];
	while (copyArray.length !== 0) {
		binaryArray.push(Number(copyArray.pop()));
	}

	// recognise the I's and their decimal values
	let totalInDecimal = 0;
	for (let i = 0; i < binaryArray.length; i++) {
		const digit = binaryArray[i];
		if (digit === 1) {
			// calculate the decimal value
			totalInDecimal += Math.pow(2, 1);
		} else if (digit !== 0) {
			totalInDecimal = 'Array is NOT binary';
			break;
		}
	}

	return totalInDecimal;
}
