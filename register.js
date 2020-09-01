var fs = require('fs');
function callback(){
    console.log('File Write Callback');
}
fs.readFile('users.json', 'utf8', function readFileCallback(err, data){
    if (err){
        console.log(err);
    } else {
        const dataNew =  {
            id : "99",
            password : "pop",
            avatar: "http://robohash.org/pop",  
            follows: []
        };
        obj = JSON.parse(data); //now it an object
        obj.users.push(dataNew); //add some data
        json = JSON.stringify(obj); //convert it back to json
        console.log('FINAL TO WRITE');
        console.log(json);
        console.log('FINAL TO WRITE');
        fs.writeFile('users.json', json, 'utf8', callback); // write it back 
    }
});