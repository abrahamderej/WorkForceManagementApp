exports.getCompanyInfo = function (id, connection, mycallbackFunc) {
  var output = "";
  connection.query(
    "SELECT * FROM Company where id=?",
    [id],
    function (err, result, fields) {
      if (err) throw err;
      console.log(result);
      mycallbackFunc(result);
    }
  );
};

exports.getAllCompanies = function (connection, mycallbackFunc) {
  var output = "";
  connection.query("SELECT * FROM Company", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
    mycallbackFunc(result);
  });
};

exports.postCompanyInfo = function (values, connection, mycallbackFunc) {
  var postData = values;
  connection.query(
    "INSERT INTO Company SET ?",
    postData,
    function (error, results, fields) {
      if (error) throw error;
      console.log(results);
      mycallbackFunc(results);
    }
  );
};

exports.updateCompanyInfo = function (values, connection, mycallbackFunc) {
  var postData = values;
  connection.query(
    "UPDATE Company SET name =?, vision =?, address=?, country=?, employeeCount=?, phoneNumber=?, industry=?, type=? where id =? ",
    [
      postData.name,
      postData.vision,
      postData.address,
      postData.country,
      postData.employeeCount,
      postData.phoneNumber,
      postData.industry,
      postData.type,
      postData.id,
    ],
    function (error, results, fields) {
      if (error) throw error;
      console.log(results);
      mycallbackFunc(results);
    }
  );
};

exports.deleteCompanyInfo = function (id, connection, mycallbackFunc) {
  connection.query(
    "Delete From Company where id=?",
    id,
    function (error, results, fields) {
      if (error) throw error;
      console.log(results);
      mycallbackFunc(results);
    }
  );
};
