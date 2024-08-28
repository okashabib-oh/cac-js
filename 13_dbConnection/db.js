var mysql = require('mysql');

var connection =  mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'tms'
});

connection.connect((err) => {
    if(err){
        throw err
    }
    console.log("Connected");
    connection.query("SELECT * FROM users", (err, result, fields) => {
        if(err) throw err;
        console.log(result);
        console.log(result[0]);
        console.log(result[0].username);
        
        console.log(fields);

        result.forEach(element => {
            console.log(element.name);
            console.log(element.username);
        }); 
    })  
})