const mysql = require('mysql2')

module.exports = async function(req, res, next) {
    const pool = mysql.createPool({
        host: 'host',
        user: 'user',
        password: 'password',
        database: 'database',
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    })
    res.pool = pool.promise()
    next()
}