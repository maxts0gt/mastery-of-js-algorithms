// Time -> O(n) | Space -> O(1)

let findLeastCommonNumber = (arr1, arr2, arr3) => {
	let i = 0,
		j = 0,
		k = 0;

	// creating loop where we see the end of the arrays till we find what we need
	while (i < arr1.length && j < arr2.length && k < arr3.length) {
		//finding the smallest number
		if (arr1[i] === arr2[j] && arr2[j] === arr3[k]) {
			return arr1[i];
		}

		// if not found, we will keep increasing the iterators
		if (arr1[i] <= arr2[j] && arr1[i] <= arr3[k]) i++;
		else if (arr2[j] <= arr1[i] && arr2[j] <= arr3[k]) j++;
		else if (arr3[k] <= arr1[i] && arr3[k] <= arr2[j]) k++;
	}
	// if we didn't find the value, the return -1
	return -1;
};

let v1 = [6, 7, 10, 25, 30, 63, 64];
let v2 = [0, 4, 5, 6, 7, 8, 50];
let v3 = [1, 6, 10, 14];

console.log(findLeastCommonNumber(v1, v2, v3));
