const mysql = require('mysql');

const db = mysql.createPool({
    host: 'b4d0zua0846foiby04ke-mysql.services.clever-cloud.com',
    user: 'unwvgsvr0sjf5jjv',
    password: 'MfZRyumwa1bq4lPMFqSE',
    database: 'b4d0zua0846foiby04ke'
});

module.exports = {
    register(req, res) {
        const email = req.body.email;
        const password = req.body.password;
        const name = req.body.name;

        db.query(
            "SELECT * FROM user WHERE email = ?", [email],
            (err, result) => {
                if (err) {
                    console.log(err);
                }
                if (result.length == 0) {
                    db.query("INSERT INTO user(email, name, password) VALUES(?,?,?)",
                        [email, name, password], (err, result) => {
                            if (err) {
                                res.send(err)
                            }

                            res.send({ msg: "User created successfully" });
                        });
                } else {
                    res.send({ msg: "User already exists" });
                }
            }
        );
    }
}