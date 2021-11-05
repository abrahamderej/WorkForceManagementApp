const express = require("express");
const app = express();
const cors = require("cors");
const bcrypt = require("bcrypt");
const db = require("../server/resources/DbConnection");

app.use(cors());
app.use(express.json());

var companyModule = require("../server/controller/CompanyController");
var profileModule = require("../server/controller/ProfileController");

//Login
app.post("/login", (req, res) => {
  console.log(req);
  const username = req.body.username;
  const password = req.body.password;
  console.log("Inside the api - username: " + username);

  db.connection.query(
    "SELECT * FROM UserRole WHERE username = ? ",
    [username],
    function (error, results, fields) {
      console.log(JSON.stringify(results) + "results");
      if (results.length > 0) {
        bcrypt.compare(password, results[0].password, function (err, result) {
          if (result == true) {
            console.log("success" + results[0]);
            res.send(results);
          }
        });
      } else {
        res.send(results);
      }
    }
  );
});

// UserProfile endpoint
app.get("/users/:id", (req, res) => {
  const id = parseInt(req.params.id);
  console.log(id + "req query");
  db.connection.query(
    "SELECT * FROM UserProfile where id =? ",
    [id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log("user Profile result" + result[0]);
        res.send(result[0]);
      }
    }
  );
});

app.put("/profile", function (req, res) {
  console.log(req.body);
  var postData = req.body;
  profileModule.updateProfileInfo(postData, db.connection, function (response) {
    console.log("Response :" + response.status);
    res.send(response);
  });
});

//Company API's
app.post("/company", function (req, res) {
  var postData = req.body;
  console.log("Post DAta: " + postData);
  companyModule.postCompanyInfo(postData, db.connection, function (response) {
    console.log("Response :" + response);
    res.send(response);
  });
});

app.put("/company", function (req, res) {
  console.log(req.body);
  var postData = req.body;
  companyModule.updateCompanyInfo(postData, db.connection, function (response) {
    console.log("Response :" + response.status);
    res.send(response);
  });
});

app.delete("/company/:id", function (req, res) {
  const companyId = parseInt(req.params.id);
  companyModule.deleteCompanyInfo(
    companyId,
    db.connection,
    function (response) {
      res.send(response);
    }
  );
});

app.get("/company/:id", function (req, res) {
  const companyId = parseInt(req.params.id);
  console.log(companyId);
  companyModule.getCompanyInfo(companyId, db.connection, function (response) {
    res.send(JSON.stringify(response));
  });
});

app.get("/company", function (req, res) {
  companyModule.getAllCompanies(db.connection, function (response) {
    res.send(response);
  });
});

app.listen(3001, () => {
  console.log("Yeah, its working");
});
