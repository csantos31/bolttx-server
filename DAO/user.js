const pool = require('./connection').pool;

module.exports = {
    login(req, resultsAreInCB) {
        pool.query('SELECT * FROM user WHERE email = ? AND password = ?',
            [req.body.email, req.body.password], (error, results, row) => {
                if (error) {
                    resultsAreInCB(error, null);
                } else {
                    resultsAreInCB(error, results);
                }
            }
        );
    }
}