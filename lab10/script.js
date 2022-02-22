// 'use strict';

const fs = require("fs");
var mysql = require("mysql2");
const express = require("express");
const path = require("path");
const exp = require("constants");
const { join } = require("path");
const app = express();
const port = 9000;

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "7448",
  database: "player",
});
connection.connect(function (err) {
  if (err) console.log(err);
  console.log("Database connected...");
});

app.listen(port, (err) => {
  if (err) console.log("Error starting server");
  else console.log(`Server listening at ${port}`);
});
app.use(express.static(path.join(__dirname)));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/player", (req, res) => {
  connection.query("SELECT * FROM player", (err, rows, fields) => {
    if (!err) res.send(rows);
    else console.log("error");
  });
});
app.get("/player/pid", (req, res) => {
  connection.query(
    "SELECT *FROM player WHERE pid=?",
    [req.params.id],
    (err, rows, fields) => {
      if (!err) res.send(rows);
      else console.log("error");
    }
  );
});

app.get("/add", (req, res) => {
  var post = {
    pid: 7,
    player_name: "Kevin Roy",
    personal_details: "null",
    jersey_no: 88,
    play_position: "defender",
    style_of_play: "null",
    injury: "none",
    team: 1,
    manager: 2,
    team_lineup: 3,
    player_career_history: "not available",
  };
  var sql = "INSERT INTO player SET ?";
  var query = connection.query(sql, post, (err, result) => {
    if (err) throw error;
    res.send("Inserted Rows.....");
  });
});
app.get("/update/pid", (req, res) => {
  var name1 = "Reena";
  var sql = `UPDATE player SET player_name='${name1}' WHERE pid=${req.params.id}`;
  var query = connection.query(sql, (err, result) => {
    if (err) throw err;
    res.send("Updated the Rows.....");
  });
});
app.get("/delete/pid", (req, res) => {
  var sql = `DELETE FROM player WHERE pid=${req.params.id}`;
  var query = connection.query(sql, (err, result) => {
    if (err) throw err;
    res.send("Deleted the Rows.....");
  });
});
