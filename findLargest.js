//function to find largest of three number

//function defination
function largestNumber(num1, num2, num3) {
	if(num1 > num2 && num1 > num3) {
		console.log(num1 + ' is the largest among ' + num1 + ' ' + num2 + ' ' + num3);
	} else if (num2 > num1 && num2 > num3) {
		console.log(num2 + ' is the largest among ' + num1 + ' ' + num2 + ' ' + num3);
	} else {
		console.log(num3 + ' is the largest among ' + num1 + ' ' + num2 + ' ' + num3);
	}
}

//function call
console.log(largestNumber(17, 52, 99));