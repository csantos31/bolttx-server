const user = require('../DAO/user');
module.exports = {
    login(req, res) {
        user.login(req, (err, result) => {
            if (err) {
                res.status(500);
                res.send({ msg: 'Internal server error' });
            } else {
                if (typeof result[0] === 'undefined') {
                    res.status(401);
                    res.send({ msg: 'Unauthorized' });
                } else {
                    res.send({ msg: 'success' });
                }
            }
        });
    }
}