const mysql = require('mysql')
const con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Kopano@2004',
    database:'grocery'
})
con.connect(function(err) {
if(err) throw err
console.log("Connected")
con.query('CREATE DATABASE IF NOT EXISTS grocery',(err,results) => {
  if (err) throw err
  console.log("Database Created/Exists")
})
var sql = `CREATE TABLE IF NOT EXISTS food (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255)
)`
con.query(sql,function(err,results) {
  if (err) throw err
  console.log("Table Created")
})
var sql1 = 'INSERT INTO food(id,name) VALUES ?'
var values = [
["10","Rama"]
]
con.query(sql1,[values],function(err,results) {
  if (err) throw err
  console.log("Data Added")
})
con.query('SELECT * FROM food',(err,results,fields) => {
  if (err) throw err
  console.log(results)
})
var sql3 = 'UPDATE food SET name = "Lobster" WHERE name="Ranger"'
con.query(sql,(err,results) => {
  if (err) throw err
  console.log("Replaced")
})
})