// time O(n) | space O(w)
const findMaxInSlidingWindow = (array, w) => {
	let result = [];
	// checking if the array is empty
	if (array.length === 0) {
		return result;
	}
	// check if window size > array size
	if (w > array.length) {
		w = array.length;
	}
	// creating window size for solution
	let window = [];

	// find out max for the first window
	for (let i = 0; i < w; i++) {
		// for every element, remove previous smaller from window
		while (
			window.length > 0 &&
			array[i] >= array[window[window.length - 1]]
		) {
			window.pop();
		}
		// add current element at the back of queue
		window.push(i);
	}
	// appending the largest element to the result
	result.push(array[window[0]]);
	// remove all numbers that are smaller than current number from tail of list
	for (let i = w; i < array.length; i++) {
		while (
			window.length > 0 &&
			array[i] >= array[window[window.length - 1]]
		) {
			window.pop();
		}

		// remove the first index from window deque
		if (window.length > 0 && window[0] < i - w) {
			window.shift();
		}
		// add current element at the back of queue
		window.push(i);
		result.push(array[window[0]]);
	}
	// and finally return result
	return result;
};

let numsList = [
	10, 6, 9, -3, 23, -1, 34, 56, 67, -1, -4, -8, -2, 9, 10, 34, 67,
];

console.log(findMaxInSlidingWindow(numsList, 15));
