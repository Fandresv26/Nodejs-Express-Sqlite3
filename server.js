const express = require("express");
const sqlite3 = require("sqlite3");


const db = new sqlite3.Database('tweets.sqlite3');
db.all("SELECT * FROM tweets", (err, data) => {
	console.log(data);
})


db.close();


const app = express();

app.get("/", (req, res) => res.send("hola!"));

app. listen(8080, () => { console.log("Listening on 8080")});



