//! Variable initialization
const { EmbedBuilder } = require("discord.js");

//* Cool number formatting function
function numberFormat(money) {
	money = money.toString().split('').reverse();

	let realmoney = [], count = 0;
	for (let i=0; i<money.length; i++) {
		if (count == 3) { realmoney.push(","); count = 0}
		realmoney.push(money[i]);
		count++;
	}
	realmoney = realmoney.reverse().join('');
	return realmoney;
}

//* Default embed constructor
class mainEmbed {
	constructor() {
		this.embed = new EmbedBuilder()
			.setColor([200, 200, 200])
			.setTitle(':flag_de: German Empire Bank System :flag_de:')
	}

	addDescription(description) { this.embed.setDescription(description); return this; }
	addFields(fields) { for (let k in fields) { this.embed.addFields(fields[k]) } return this; }
	addFooter(footer) { this.embed.setFooter(footer); return this; }
	build_error() { this.embed.setDescription(':x: You do not have a bank account yet.'); return this.embed; }
	build() { return this.embed; }
}

//! Final export
module.exports = { numberFormat, mainEmbed }
