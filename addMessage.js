var fs = require("fs");
function callback() {
  console.log("File Write Callback");
}
fs.readFile("posts.json", "utf8", function readFileCallback(err, data) {
  if (err) {
    console.log(err);
  } else {
    let dataNew = {
      id: 111,
      user: "QWERTY TWO",
      timestamp: "OOOIII ii UU",
      content: "HELLO WORLD",
      likes: [],
    };

    obj = JSON.parse(data); //now it an object
    obj.posts.push(dataNew); //add some data
    json = JSON.stringify(obj); //convert it back to json
    fs.writeFile("posts.json", json, "utf8", callback); // write it back
  }
});
