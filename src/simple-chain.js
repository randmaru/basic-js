/**
 * Implement chainMaker object according to task description
 *
 */
export default {
	chain: [],

	addLink(value = '') {
		this.chain.push(value);

		return this;
	},

	removeLink(pos) {
		if (pos < 1 || this.chain.length - 1 < pos || typeof pos !== 'number' || pos % 1 !== 0) {
			this.chain = [];
			throw new Error('You can\'t remove incorrect link!');
		}

		this.chain.splice(pos - 1, 1);

		return this;
	},

	reverseChain() {
		this.chain = this.chain.reverse();

		return this;
	},

	finishChain() {
		const result = this.chain.map((item) => `( ${item} )`).join('~~');
		this.chain = [];

		return result;
	}
};
