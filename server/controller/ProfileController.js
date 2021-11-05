exports.updateProfileInfo = function (values, connection, mycallbackFunc) {
  var postData = values;
  connection.query(
    "UPDATE UserProfile SET firstName =?, lastName =?, street=?, country=?, state=?, phoneNumber=?, zipCode=? where id =? ",
    [
      postData.firstName,
      postData.lastName,
      postData.street,
      postData.country,
      postData.state,
      postData.phoneNumber,
      postData.zipCode,
      postData.id,
    ],
    function (error, results, fields) {
      if (error) throw error;
      console.log(results);
      mycallbackFunc(results);
    }
  );
};
