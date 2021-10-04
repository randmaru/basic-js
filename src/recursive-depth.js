/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
export default class DepthCalculator {
	calculateDepth(arr, depth = 1) {
		let result = depth;

		arr.forEach((item) => {
			if (Array.isArray(item)) {
				const newDepth = this.calculateDepth(item, depth + 1);
				if (newDepth > result) result = newDepth;
			}
		});

		return result;
	}
}
