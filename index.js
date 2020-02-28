const express = require('express')
var bodyParser = require('body-parser');
const app = express()
const port = process.env.PORT || 3000

app.use(express.static('public'))

app.get('/', (req, res) => res.sendFile(__dirname + '/public/htmls/index.html'))

app.use(bodyParser.urlencoded({
    extended: true
}));

//app.use(express.bodyParser());

var obj = {};
obj.mail = "123@gmail.com";

app.get

app.post('/myaction', function (req, res) {


    //res.send('You sent the name "' + req.body.email + '".');
    obj.mail = req.body.email;


    var nodemailer = require('nodemailer');
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'praneethreddy.git@gmail.com',
            pass: 'p@chotuR6'
        }
    });
    const mailOptions = {
        from: 'praneethreddy.git@gmail.com', // sender address
        to: obj.mail, // list of receivers
        subject: 'Subject of your email', // Subject line
        html: '<p>Your html here</p>' // plain text body
    };
    transporter.sendMail(mailOptions, function (err, info) {
        if (err)
            console.log(err)
        else
            console.log(info);
    });
});


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
