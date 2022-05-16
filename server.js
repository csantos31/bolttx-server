const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

app.use(cors());
app.use(bodyParser.urlencoded({ limit: '100mb', extended: true }));
app.use(bodyParser.json({ limit: '100mb' }));

app.use('/api/', require('./router'));
app.listen(process.env.PORT || 3001);