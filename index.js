require("dotenv").config();
const { Client, Events, GatewayIntentBits } = require('discord.js');

const client = new Client({ intents: [
	GatewayIntentBits.DirectMessages,
	GatewayIntentBits.Guilds,
	GatewayIntentBits.GuildMessages,
	GatewayIntentBits.MessageContent
]});

const commands = {
    help: require("./util/commands/help.js"),
    leaderboard: require("./util/commands/leaderboard.js"),
    createAccount: require("./util/commands/createAccount.js"),
    account: require("./util/commands/account.js"),
    work: require("./util/commands/work.js"),
    crime: require("./util/commands/crime.js"),
    bet: require("./util/commands/bet.js"),
    admin: require("./util/commands/admin.js")
}

client.once(Events.ClientReady, readyClient => {
	console.log(`✅ ${readyClient.user.tag} ready to use.`);
});

client.on('messageCreate', (msg) => {
    if (msg.author.bot || !msg.content.startsWith(process.env.PREFIX)) return;

    const commandName = msg.content.slice(process.env.PREFIX.length);

    for (let k in commands) {
        if (commandName == k) commands[k](msg);
    }
});

client.login(process.env.TOKEN);
