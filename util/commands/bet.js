const utilities = require("../utilities.js"), database = require("../database.js");

const betCmd = (msg) => {
    let account = `~@G-${msg.author.id}`;
    if (!database.checkAcc(account)) { msg.reply({ embeds: [ new utilities.mainEmbed().build_error() ] }); return; }

    
}

module.exports = betCmd;
