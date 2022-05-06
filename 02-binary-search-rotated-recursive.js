const binarySearch = function (nums, start, end, target) {
	// check if array is valid
	if (start > end) {
		return -1;
	}

	// Finding the mid
	let mid = start + Math.floor((end - start) / 2);

	// check if we found target, in the end mid is the value we return
	if (nums[mid] === target) {
		return mid;
	}

	// start to mid is sorted
	if (
		// start is lower than mid
		nums[start] <= nums[mid] &&
		// target is within the range
		target <= nums[mid] &&
		target >= nums[start]
	) {
		// then call recursively
		return binarySearch(nums, start, mid - 1, target);
	}
	// mid to end is sorted
	else if (
		// if mid is lower than end
		nums[mid] <= nums[end] &&
		// target is within the range
		target >= nums[mid] &&
		target <= nums[end]
	) {
		// then call recursively
		return binarySearch(nums, mid + 1, end, target);
		// check if end is lower than mid
	} else if (nums[end] <= nums[mid]) {
		// following is checking the corners but important part of algorithm
		// then call recursively (start is mid + 1)
		return binarySearch(nums, mid + 1, end, target);
		// check if start is higher than mid
	} else if (nums[start] >= nums[mid]) {
		// then call recursively (end is mid -1)
		return binarySearch(nums, start, mid - 1, target);
	}
	// if we can't find it then return - 1
	return -1;
};

// now call that function in the following function
const binarySearchRotated = function (nums, target) {
	// where start is at index 0 and end is at array end
	return binarySearch(nums, 0, nums.length - 1, target);
};
