const  sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./images.db');

db.serialize(function() {
    db.run("CREATE TABLE IF NOT EXISTS images (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, data BLOB)");
});

module.exports = db;
