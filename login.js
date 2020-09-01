var fs = require("fs");

fs.readFile("users.json", "utf8", function readFileCallback(err, data) {
  if (err) {
    console.log(err);
  } else {
    const loginDetails = {
      id: "Bobalooba",
      password: "bob",
    };
    usersData = JSON.parse(data); //now it an object
    const result = usersData.users.filter(
      (el) =>
        el.password.toLowerCase() === loginDetails.password.toLowerCase() &&
        el.id.toLowerCase() === loginDetails.id.toLowerCase()
    ); 
    console.log("Results");
    console.log(result);
    console.log("Results");
  }
});
