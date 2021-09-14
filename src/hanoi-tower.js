/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 *
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 *
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
export default (disksNumber, turnsSpeed) => {
	const turns = 2 ** disksNumber - 1,
		seconds = Math.floor(((2 ** disksNumber - 1) * 3600) / turnsSpeed);
	return { turns, seconds };
};
