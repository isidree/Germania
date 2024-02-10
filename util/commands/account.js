const utilities = require("../utilities.js");

const accFunc = (msg) => {
    let embed = new utilities.mainEmbed().addDescription(":x: Account is still being created.").build();
    msg.reply({ embeds: [embed] });
}

module.exports = accFunc;

/*

DELETE
if (account in database.accounts) {
    delete database.accounts[account];
    saveDataToFile();

    let embed = new mainEmbed().addDescription(`:white_check_mark: Your bank account has been deleted.\n:wave: Feel free to come back!`).build()
    msg.reply({ embeds: [embed] });
} else {
    msg.reply({ embeds: [ new mainEmbed().build() ] });
}

VIEW-MONEY
if (account in database.accounts) {
    let money = database.accounts[account];
    money = numberFormat(money);

    let embed = new mainEmbed().addDescription(`:money_with_wings: Your bank account has \`${money}€\`.\n:1234: **${account}**.`).build()
    msg.reply({ embeds: [embed] });
} else {
    msg.reply({ embeds: [ new mainEmbed().build() ] });
}

*/