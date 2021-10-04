/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
export default (arr) => {
	if (Array.isArray(arr)) {
		let checkOne = false,
			checkTwo = false;

		return arr.reduce((value, item, i) => {
			if (item === "--discard-next") {
				if (
					arr[i + 2] === "--double-prev" ||
					arr[i + 2] === "--discard-prev"
				)
					checkTwo = true;
				checkOne = true;

				return value;
			}

			if (item === "--double-next") {
				if (i < arr.length - 1) value.push(arr[i + 1]);

				return value;
			}

			if (item === "--double-prev") {
				if (checkTwo === true) {
					checkTwo = false;
					return value;
				}
				if (i > 0) value.push(arr[i - 1]);

				return value;
			}

			if (item === "--discard-prev") {
				if (checkTwo === true) {
					checkTwo = false;
					return value;
				}
				if (i > 0) value.pop();

				return value;
			}

			if (checkOne === true) {
				checkOne = false;

				return value;
			}

			value.push(item);
			return value;
		}, []);
	}
	throw new Error(`'arr' parameter must be an instance of the Array!`);
};
