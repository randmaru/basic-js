/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
export default class VigenereCipheringMachine {
	constructor(isDirect = true) {
		this.isDirect = isDirect;
		this.startCode = "A".charCodeAt(0);
	}

	encrypt(message = null, key = null) {
		if (message === null || key === null)
			throw new Error(`Incorrect arguments!`);

		const upMessage = message.toUpperCase().split(""),
			upKey = key.toUpperCase().split("");

		let j = -1;
		const result = upMessage.map((char, i) => {
			if ("A" <= char && char <= "Z") {
				++j;

				return String.fromCharCode(
					this.startCode +
						((char.charCodeAt(0) -
							this.startCode +
							((upKey[j % upKey.length].charCodeAt(0) -
								this.startCode) %
								26)) %
							26)
				);
			}
			return char;
		});

		if (!this.isDirect) {
			result.reverse();
		}

		return result.join("");
	}

	decrypt(message = null, key = null) {
		if (message === null || key === null)
			throw new Error(`Incorrect arguments!`);

		const upMessage = message.toUpperCase().split(""),
			upKey = key.toUpperCase().split("");

		let j = -1;
		const result = upMessage.map((char, i) => {
			if ("A" <= char && char <= "Z") {
				++j;

				return String.fromCharCode(
					this.startCode +
						((char.charCodeAt(0) -
							this.startCode +
							26 -
							((upKey[j % upKey.length].charCodeAt(0) -
								this.startCode) %
								26)) %
							26)
				);
			}
			return char;
		});

		if (!this.isDirect) {
			result.reverse();
		}

		return result.join("");
	}
}
