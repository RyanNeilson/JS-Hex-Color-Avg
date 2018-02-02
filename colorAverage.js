function colorAvg(color1, color2)
{	
	/* 
	 * The color1 and color2 values below are being used for demonstration and testing.
	 * If I was retrieving the color values from an HTML input source, color1 and color2 might have looked like:
	 * var color1 = document.getElementById("color1IdHere").value; 
	 * var color2 = document.getElementById("color2IdHere").value;
	 */ 
	var color1 = document.getElementById("color1").value;
	var color2 = document.getElementById("color2").value;
	
	/*
	 * Create two empty arrays to receive RGB values
	 */
	var arr1 = [];
	var arr2 = [];
	
	/* 
	 * finalColor will hold the final average color in hexadecimal format
	 */
	var finalColor;
	
	/*
	 * Slice two characters at a time from the input string, adding "0x" to the beginning of each slice, 
	 * then parse the concatenated value to decimal and push it to the corresponding array. I used the "0x" concatenation here instead of
	 * a radix value, because I feel it more clearly shows that are going to parse from hexadecimal to decimal. 
	 */
	arr1.push(parseInt("0x" + color1.slice(0,2)));
	arr1.push(parseInt("0x" + color1.slice(2,4)));
	arr1.push(parseInt("0x" + color1.slice(4,6)));
	
	arr2.push(parseInt("0x" + color2.slice(0,2)));
	arr2.push(parseInt("0x" + color2.slice(2,4)));
	arr2.push(parseInt("0x" + color2.slice(4,6)));
	
	/*
	 * Find the arithmetic mean ((A+B)/2) of the corresponding R, G, and B values as they have been stored in arr1 and arr2. 
	 * Round the resulting values to the nearest integers, convert them from numbers to strings, then concatenate those strings
	 * into a final, 6 character hexadecimal string.
	 */
	finalColor = (Math.round((arr1[0] + arr2[0])/2)).toString(16) + (Math.round((arr1[1] + arr2[1])/2)).toString(16) + (Math.round((arr1[2] + arr2[2])/2)).toString(16);
	document.getElementById("color1Display").style.backgroundColor = ("#"+ color1);
	document.getElementById("color2Display").style.backgroundColor = ("#"+ color2);
	document.getElementById("finalColorCode").innerHTML = finalColor;
	document.getElementById("finalColorDisplay").style.backgroundColor = ("#"+ finalColor);
	document.getElementById("color1Column").style.backgroundColor = ("#"+ color1);
	document.getElementById("color2Column").style.backgroundColor = ("#"+ color2);
	document.getElementById("finalColorColumn").style.backgroundColor = ("#"+ finalColor);
	
	return finalColor;
}
