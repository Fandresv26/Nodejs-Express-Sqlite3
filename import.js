//libreria fs
const fs = require("fs");

const sqlite3 = require('sqlite3').verbose();

function insertTweets(tweets) {
		const db = new sqlite3.Database('tweets.sqlite3');

	db.serialize(() => {

		db.run("DROP TABLE IF EXIST tweets");
	  db.run("CREATE TABLE tweets (screen_name VARCHART, profile_img_url VARCHART, text TEXT)");

	  var stmt = db.prepare("INSERT INTO tweets VALUES (?, ?, ? )");

	  for (let t of tweets){
	  	stmt.run(t.user.screen_name,
	  		t.user.profile_img_url,
	  		t.text);

	  }
	  stmt.finalize();

	});

	db.close();
}

fs.readFile("WebDevUniandes2018_w2.json", "utf8", (err, data) => {
	if (err) throw err;

	const tweets = JSON.parse(data);

	insertTweets(tweets);

});



