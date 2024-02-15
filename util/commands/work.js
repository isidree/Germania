const utilities = require("../utilities.js");
const path = require("path"), fs = require("fs");

const workCmd = (msg) => {
    let account = `~@G-${msg.author.id}`;
    if (!utilities.checkAcc(account)) { msg.reply({ embeds: [ new utilities.mainEmbed().build_error() ] }); return; }
        
    const jobs = ["librarian", "software developer", "teacher", "nurse", "marketing coordinator", "customer service representative", "carpenter", "graphic designer", "project manager", "sales associate", "receptionist", "chef", "data analyst", "mechanical engineer", "pharmacist", "security guard"];
    let job = jobs[Math.max(0, Math.ceil(Math.random() * jobs.length) - 1)];
    let money_increment = Math.floor(Math.random()*2500);

    let path_to_db = path.join(__dirname, "../../data/accounts.json");
    let db = JSON.parse(fs.readFileSync(path_to_db));
    db[account] += money_increment;
    fs.writeFileSync(path_to_db, JSON.stringify(db));

    let realmoney = utilities.numberFormat(money_increment);
    let embed = new utilities.mainEmbed().addDescription(`:construction_worker: You worked as a ${job}.\n:money_with_wings: You earnt \`${realmoney}€\`.`).build();
    msg.reply({ embeds: [embed] });
}

module.exports = workCmd;
