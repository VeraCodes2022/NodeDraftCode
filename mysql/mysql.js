const mysql = require('mysql');
const con = mysql.createConnection({
    host: "localhost",
    user: "zhang.vr@gmail.com",
    password: "ilovejukka123"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

