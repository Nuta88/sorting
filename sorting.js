function sortingArr(arr) {
	if (arr.length < 2) {
		return arr;
	}
	for (var i = 0; i < arr.length - 1; i++) {
		var j = i;
		while (j >= 0) {
			if (arr[i + 1] > arr[j]) {
				break;
			}
			j--;
		}
		var temp = arr[i + 1];
		for (var k = i + 1; k > j + 1; k--) {
			arr[k] = arr[k - 1];
		}
		arr[j + 1] = temp;
	}
	return arr;
}

function testing() {
	var inputArr =    [ 5, 3, 6,  1, 2, 7, 4 ];
	var expectedArr = [ 1, 2, 3, 4, 5, 6, 7 ];
	var receivedArr = sortingArr(inputArr);
	if (expectedArr.toString() === receivedArr.toString()) {
		document.write("function is working good");
	} else {
		document.write("function is working bad <br>" + receivedArr);
	}
}
testing();