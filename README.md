# GermanBot
![image](https://github.com/isidree/GermanBot/assets/114698401/4c8f19e7-6210-4101-a7c3-433384764202)
## Introduction
GermanBot is a Discord bot built with the npm module "discord.js". Its main goal is to establish a customized economy system for our Discord server, the [Federal Republic of Germany](https://discord.gg/GAPdHF9RSf).
There are, of course, plenty of bots which can establish an economy in any Discord server. However, many of them are limited. There are some details we would like to add, in order to enhance a better roleplay.

## Details
### Commands
We have some basic commands when it comes to the economy:
- !help
- !leaderboard
- !create-account
- !account
  - balance
  - collect-income
  - delete-account
- !work
- !crime
- !bet `<amount>`
- !admin
  - admin-cmds
  - seize `<account>`
  - add-income
  - remove-income

Many of them have been extracted from UnbelievaBoat to enhance a full experience. We also include the feature of creating your own bank account, this way we don't store unwanted data.

### Data storage
We are currently using a JSON file as a database. We are aware that this is an horrible practice; however, we don't have to store many data. We avoid installing a whole database system for some loose numbers.
