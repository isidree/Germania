const utilities = require("../utilities.js");

const sendHelp = (msg) => {
    let embed = new utilities.mainEmbed()
        .addDescription(`My prefix is: \`${utilities.prefix}\`.`)
        .addFields([
            { name: ':grey_question: !help', value: 'Displays this menu.', inline: false },
            { name: ':ballot_box_with_check: !create-account', value: 'Creates a bank account under a unique ID.', inline: false },
            { name: ':bank: !account', value: 'Get access to your account panel. See balance, collect your income and delete your account options are present here.', inline: false },
            { name: ':construction_worker: !work', value: 'Work in a random job. Chances to fail here are 0%, but your revenue will be lower.', inline: false },
            { name: ':ninja: !crime', value: 'Commit a crime. Chances to fail are 45%; however, if you succeed, your revenue will be significantly higher.', inline: false },
            { name: ':coin: !bet', value: 'You can bet an amount of money. Chances to fail are random in each bet. The more money you bet, the more you can earn, and viceversa.', inline: false },
            { name: ':computer: !admin', value: 'Admin panel, **only for admins**.', inline: false }
        ])
        .addFooter({ text: 'GermanBot v0.1.1. ALPHA | Ypsilon Software Inc.', iconURL: 'https://cdn.discordapp.com/attachments/1178015572735299735/1203055569485692929/Y.png?ex=65cfb3cf&is=65bd3ecf&hm=4df758f34504c193d4439f10324406b870299c260a69d9a3da2944ea0e3f0330&' })
        .build()

    msg.reply({ embeds: [embed] });
}

module.exports = sendHelp;
