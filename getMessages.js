var fs = require("fs");
fs.readFile("posts.json", "utf8", function readFileCallback(err, data) {
  if (err) {
    console.log(err);
  } else {
    usersData = JSON.parse(data); //now it an object
    console.log("Result");
    console.log(usersData);
    console.log("Result");
  }
});
