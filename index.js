const mongoClient = require('mongodb').mongoClient
const url = 'mongodb://localhost:27017/mydb1'
mongoClient.connect(url, function (error, db) {
	// body...
	if (error) throw error;
	console.log("Database Created!")
	db.close()
})