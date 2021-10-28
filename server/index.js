const express = require("express");
const app = express();
const cors = require("cors");
const mysql = require("mysql");
const bcrypt = require("bcrypt");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "password",
  database: "workforceManagement",
});
app.get("/clients", (req, res) => {
  db.query("SELECT * FROM client", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.get("/employees", (req, res) => {
  db.query("SELECT * FROM employees", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.post("/login", (req, res) => {
  console.log(req);
  const username = req.body.username;
  const password = req.body.password;
  console.log("Inside the api - username: " + username);

  db.query(
    "SELECT * FROM UserRole WHERE username = ? ",
    [username],
    function (error, results, fields) {
      console.log(JSON.stringify(results) + "results");
      if (results.length > 0) {
        bcrypt.compare(password, results[0].password, function (err, result) {
          if (result == true) {
            console.log("success");
            res.send(results);
          }
        });
      }
    }
  );
});
app.post("/create", (req, res) => {
  const name = req.body.name;
  const age = req.body.age;
  const country = req.body.country;
  const position = req.body.position;
  const wage = req.body.wage;

  db.query(
    "INSERT INTO employees (name, age, country, position, wage) VALUES(?,?,?,?,?)",
    [name, age, country, position, wage],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("values inserted");
      }
    }
  );
});

app.listen(3001, () => {
  console.log("Yeah, its working");
});
