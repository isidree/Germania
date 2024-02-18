//! Variable initialization
const fs = require('fs'), path = require("path")
const path_to_db = path.join(__dirname, "../data/germany_data.json");
const idb = () => JSON.parse(fs.readFileSync(path_to_db));

//* Check if account exists
function checkAcc(id) {
	let db = idb();
	return id in db.accounts;
}

//* Add account to database
function createAccount(account) {
    let db = idb();
    db.accounts[account] = {
		"balance": 1000,
		"seized": false,
		"cooldowns": {}
	};
    fs.writeFileSync(path_to_db, JSON.stringify(db, null, 2));
}

function incrementBalance(account, amount) {
	let db = idb();
	db.accounts[account].balance += amount;
	fs.writeFileSync(path_to_db, JSON.stringify(db, null, 2));
}

function decrementBalance(account, amount) {
	let db = idb();
	db.accounts[account].balance -= amount;
	fs.writeFileSync(path_to_db, JSON.stringify(db, null, 2));
}

function checkBalance(account) {
    let db = idb();
	console.log(db.accounts[account])
    return db.accounts[account].balance;
}

//! Final export
module.exports = { checkAcc, createAccount, incrementBalance, decrementBalance, checkBalance }
