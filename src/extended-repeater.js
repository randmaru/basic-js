/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default (str, options) => {
	const {
		repeatTimes,
		separator = "+",
		addition = "",
		additionRepeatTimes,
		additionSeparator = "|",
	} = options;

	return new Array(repeatTimes)
		.fill(
			String(str) +
				new Array(additionRepeatTimes)
					.fill(String(addition))
					.join(additionSeparator)
		)
		.join(separator);
};
