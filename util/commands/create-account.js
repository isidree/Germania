const utilities = require("../utilities.js");

const accFunc = (msg) => {
    let embed = new utilities.mainEmbed().addDescription(":x: Create-account is still being created.").build();
    msg.reply({ embeds: [embed] });
}

module.exports = accFunc;

/*

if (!(account in database.accounts)) {
    database.accounts[account] = 1000;
    saveDataToFile();

    let embed = new mainEmbed().addDescription(`:white_check_mark: Your bank account has been created.\n:wave: Be welcome, **${account}**!`).build()
    msg.reply({ embeds: [embed] });
} else {
    let embed = new mainEmbed().addDescription(`:x: You already have a bank account, **${account}**.`).build()
    msg.reply({ embeds: [embed] });
}

*/