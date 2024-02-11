//! Main variables
require("dotenv").config();
const { Client, Events, GatewayIntentBits } = require('discord.js');

const client = new Client({ intents: [
	GatewayIntentBits.DirectMessages,
	GatewayIntentBits.Guilds,
	GatewayIntentBits.GuildMessages,
	GatewayIntentBits.MessageContent
]});

const utilities = require("./util/utilities.js");
const funcs = {
    help: require("./util/commands/help.js"),
    leaderboard: require("./util/commands/leaderboard.js"),
    createAccount: require("./util/commands/createAccount.js"),
    account: require("./util/commands/account.js"),
    work: require("./util/commands/work.js"),
    crime: require("./util/commands/crime.js"),
    bet: require("./util/commands/bet.js"),
    admin: require("./util/commands/admin.js")
}


//! Bot online event
client.once(Events.ClientReady, readyClient => {
	console.log(`✅ Ready! Logged in as ${readyClient.user.tag}.`);
});

//! Commands
client.on('messageCreate', (msg) => {
    if (msg.author.bot || !msg.content.startsWith(utilities.prefix)) return;

    msg.content = msg.content.substring(1);

    for (let k in funcs) {
        if (msg.content == k) {
            funcs[k](msg);
        }
    }
});

//! Final login
client.login(process.env.TOKEN);
