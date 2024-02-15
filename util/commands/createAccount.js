const path = require("path"), fs = require("fs"), utilities = require("../utilities.js");

const accFunc = (msg) => {
    let account = `~@G-${msg.author.id}`;
    if (utilities.checkAcc(account)) { msg.reply({ embeds: [ new utilities.mainEmbed()
        .addDescription(":x: You already have an account.")
        .build()
    ] }); return; }

    let path_to_db = path.join(__dirname, "../../data/accounts.json");
    let db = JSON.parse(fs.readFileSync(path_to_db));
    db[account] = 1000;
    fs.writeFileSync(path_to_db, JSON.stringify(db));

    let embed = new utilities.mainEmbed().addDescription(`:white_check_mark: Your bank account has been created.\n:wave: Be welcome, **${account}**!`).build();
    msg.reply({ embeds: [embed] });
}

module.exports = accFunc;
