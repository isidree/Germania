const utilities = require("../utilities.js");

const accFunc = (msg) => {
    let embed = new utilities.mainEmbed().addDescription(":x: Bet is still being created.").build();
    msg.reply({ embeds: [embed] });
}

module.exports = accFunc;
