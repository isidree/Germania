const utilities = require("../utilities.js"), database = require("../database.js");

const crimeCmd = (msg) => {
    let account = `~@G-${msg.author.id}`;
    if (!database.checkAcc(account)) { msg.reply({ embeds: [ new utilities.mainEmbed().build_error() ] }); return; }
        
    const crimes = ["identity theft", "cyber hacking", "assault", "drug trafficking", "money laundering", "fraudulent tax filing", "burglary", "vandalism", "forgery", "embezzlement", "human trafficking", "cyber stalking", "domestic violence", "counterfeiting", "insurance fraud", "public corruption"];
    let crime = crimes[Math.max(0, Math.ceil(Math.random() * crimes.length) - 1)]; 
    let money_change = Math.floor(Math.random()*2500);
    let realmoney = utilities.numberFormat(money_change);

    let success = Math.random() > 0.45;
    let embed;

    if (success) {
        database.incrementBalance(account, money_change);
        embed = new utilities.mainEmbed().addDescription(`:ninja: You commited a crime: ${crime}.\n:money_with_wings: You succeeded and earnt \`${realmoney}€\`.`).build();
    } else {
        database.decrementBalance(account, money_change);
        embed = new utilities.mainEmbed().addDescription(`:ninja: You commited a crime: ${crime}.\n:no_pedestrians: You got caught and lost \`${realmoney}€\`.`).build();
    }
    
    msg.reply({ embeds: [embed] });
}

module.exports = crimeCmd;
