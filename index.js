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
const help = require("./util/commands/help.js");
const leaderboard = require("./util/commands/leaderboard.js");
const create_account = require("./util/commands/create-account.js");
const account = require("./util/commands/account.js");
const work = require("./util/commands/work.js");
const crime = require("./util/commands/crime.js");
const bet = require("./util/commands/bet.js");
const admin = require("./util/commands/admin.js");

//! Bot online event
client.once(Events.ClientReady, readyClient => {
	console.log(`✅ Ready! Logged in as ${readyClient.user.tag}.`);
});

//! Commands
client.on('messageCreate', (msg) => {
    if (msg.author.bot) return;

    if (msg.content.startsWith(utilities.prefix + "help")) {
        help(msg);
    } else if (msg.content.startsWith(utilities.prefix + "leaderboard")) {
        leaderboard(msg);
    } else if (msg.content.startsWith(utilities.prefix + "create-account")) {
        create_account(msg);
    } else if (msg.content.startsWith(utilities.prefix + "account")) {
        account(msg);
    } else if (msg.content.startsWith(utilities.prefix + "work")) {
        work(msg);
    } else if (msg.content.startsWith(utilities.prefix + "crime")) {
        crime(msg);
    } else if (msg.content.startsWith(utilities.prefix + "bet")) {
        bet(msg);
    } else if (msg.content.startsWith(utilities.prefix + "admin")) {
        admin(msg);
    }
});

//! Final login
client.login(process.env.TOKEN);
