//! Variable initialization
const fs = require('fs');
const { EmbedBuilder } = require("discord.js");

const rawData = fs.readFileSync('database.json');
let database = JSON.parse(rawData);

const prefix = "!";

//! Function to store in database
function saveDataToFile() {
    fs.writeFileSync('database.json', JSON.stringify(database, null, 2));
}

//! Cool number formatting function
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

//! Default embed constructor
class mainEmbed {
	constructor() {
		this.embed = new EmbedBuilder()
			.setColor([200, 200, 200])
			.setTitle(':flag_de: German Empire Bank System :flag_de:')
			.setDescription(':x: You do not have a bank account yet.')
	}

	addDescription(description) { this.embed.setDescription(description); return this; }
	addFields(fields) { for (let k in fields) { this.embed.addFields(fields[k]) } return this; }
	addFooter(footer) { this.embed.setFooter(footer); return this; }
	build() { return this.embed; }
}

//! Check if account exists
const checkAcc = id => id in database.accounts;


module.exports = {
    prefix, saveDataToFile, numberFormat, mainEmbed, checkAcc
}
