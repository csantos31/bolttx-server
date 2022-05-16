const mysql = require('mysql');

const pool = mysql.createPool({
    host: 'b4d0zua0846foiby04ke-mysql.services.clever-cloud.com',
    user: 'unwvgsvr0sjf5jjv',
    password: 'MfZRyumwa1bq4lPMFqSE',
    database: 'b4d0zua0846foiby04ke'
});
exports.pool = pool;