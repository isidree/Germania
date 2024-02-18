const utilities = require("../utilities.js"), database = require("../database.js");

const accFunc = (msg) => {
    let account = `~@G-${msg.author.id}`;
    if (database.checkAcc(account)) { msg.reply({ embeds: [ new utilities.mainEmbed()
        .addDescription(":x: You already have an account.")
        .build()
    ] }); return; }

    database.createAccount(account);

    let embed = new utilities.mainEmbed().addDescription(`:white_check_mark: Your bank account has been created.\n:wave: Be welcome, **${account}**!`).build();
    msg.reply({ embeds: [embed] });
}

module.exports = accFunc;
