import mysql from 'mysql';

var connection =  mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test'
});
export {
    connection
}