const binarySearchRotated = function (nums, target) {
	// we will create two pointers start and end
	let start = 0,
		end = nums.length - 1;
	// now we check if nums has value in it
	if (start > end) return -1;
	// else we create while loop
	while (start <= end) {
		// first we find the mid point, it's mid between start and end
		let mid = Math.floor((start + end) / 2);
		// actually mid is the value we will return in the end
		if (nums[mid] === target) {
			return mid;
		}

		// check if start end mid is sorted
		if (nums[start] <= nums[mid]) {
			// if this is the case, now check if the target is within the range
			if (nums[start] <= target && target < nums[mid]) {
				// if so, update the end
				end = mid - 1;
			} else {
				// if not, update the start because target is not within the range
				start = mid + 1;
			}
		}

		// check if the mid to end is sorted (it has same logic)
		if (nums[mid] <= nums[end]) {
			// if this is the case, now check if the target is within the range
			if (nums[mid] < target && target <= nums[end]) {
				// if target is within range start is now the mid and mid is pushed
				start = nums[mid] + 1;
			} else {
				// else target is not within range, thus end and mid is moved to the front
				end = mid - 1;
			}
		}
	}
	// if we can't find the value in while loop, then return -1
	return -1;
};

console.log(binarySearchRotated([6, 7, 1, 2, 3, 4, 5], 3));
