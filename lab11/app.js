"use strict";

const fs = require("fs");
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  // 200 status code means OK
  res.status().send(200);
});

var http = require("http");

// Create a server object
http
  .createServer(function (req, res) {
    // http header
    res.writeHead(200, { "Content-Type": "text/html" });

    var url = req.url;

    if (url === "/database.json") {
      console.log("reading again");
      const jsonData = require("./database.json");
      console.log(jsonData);
      res.write(" data loaded");
      res.end();
    } else if (url === "/about") {
      console.log("welcome to Team Management ");
      res.write(" Welcome to Team Management");
      res.end();
    } else {
      res.writeHead(200);
      res.write(" OK");
      res.end();
    }
  })
  .listen(8081, function () {
    // The server object listens on port 3000
    console.log("server start at port 8081");
  });

/*
let rawdata = fs.readFileSync('database.json');
let mechanic = JSON.parse(rawdata);
console.log(mechanic); 
*/

let products = {
  players: [
    {
      status: "0",
      dob: "july 21 1990",
      name: "Sunil",
      price: 350000.0,
      location: "Periyar",
      type: "batsman",
      contact: "9900808675",
    },
    {
      status: "1",
      dob: "october 24,2021",
      name: "Ramuk",
      price: 500000.0,
      location: "Kalavasal",
      type: "bowler",
      contact: "9486693427",
    },
    {
      status: "1",
      dob: "july 23 ,1990",
      name: "Abishek",
      price: 1500000.0,
      location: "Thiruparankundram",
      type: "captain",
      contact: "8883712624",
    },
    {
      status: "1",
      dob: "july 21 ,1990",
      name: "Sunil Kumar",
      price: 360000.0,
      location: "Andalpuram",
      type: "all-rounder",
      contact: "9082645654",
    },
    {
      status: "1",
      dob: "july 21 ,1990",
      name: "Prasanna",
      price: 400000.0,
      location: "Madurai",
      type: "bowler",
      contact: "9900808574",
    },
    {
      status: "0",
      dob: "january 21 ,1990",
      name: "Pavan",
      price: 350000.0,
      location: "Periyar",
      type: "batsman",
      contact: "9443083277",
    },
    {
      status: "1",
      dob: "march 21 ,1990",
      name: "Steve",
      price: 500000.0,
      location: "Kalavasal",
      type: "bowler",
      contact: "9486693427",
    },
    {
      status: "1",
      dob: "april 21 ,1990",
      name: "Sandeep",
      price: 1500000.0,
      location: "Thiruparankundram",
      type: "bowler",
      contact: "9047887913",
    },
    {
      status: "1",
      dob: "july 21 ,1990",
      name: "Madhu",
      price: 360000.0,
      location: "Andalpuram",
      type: "ALL-rounder",
      batsman: "8765676453",
    },
    {
      status: "1",
      dob: "september 21 ,1990",
      name: "Varsha",
      price: 400000.0,
      location: "Madurai",
      type: "wicket keeper",
      contact: "6677558899",
    },
    {
      status: "0",
      dob: "july 21 ,1990",
      name: "Priyasha",
      price: 350000.0,
      location: "Periyar",
      type: "batsman",
      contact: "87656474647",
    },
    {
      status: "1",
      dob: "july 21 ,1990",
      name: "Mounika",
      price: 500000.0,
      location: "Kalavasal",
      type: "vicecaptain",
      contact: "9486693427",
    },
    {
      status: "1",
      dob: "july 21 ,1990",
      name: "Sindu",
      price: 100000.0,
      location: "Thiruparankundram",
      type: "batsman",
      contact: "9047887913",
    },
    {
      status: "1",
      dob: "july 21 ,1990",
      name: "Harika",
      price: 360000.0,
      location: "Andalpuram",
      type: "bowler",
      contact: "88776554433",
    },
    {
      status: "1",
      dob: "july 21 ,1990",
      name: "Gowthami",
      price: 400000.0,
      location: "Madurai",
      type: "batsman",
      contact: "8241654654",
    },
  ],
};

let data = JSON.stringify(products);

fs.writeFile("./database.json", data, (err) => {
  console.log("WRITING...");
  if (err) throw err;
  console.log("Data written to file");
});

fs.readFile("./database.json", (err, data) => {
  console.log("READING...");
  if (err) throw err;
  let products = JSON.parse(data);
  console.log(products);
});
