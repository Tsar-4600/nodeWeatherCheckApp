


const express = require('express');
const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.listen(3000, ()=>{
    console.log('Работает! >:) ');
});

//GET
app.get('/', function (req, res) {
    res.render('index')
});
// app.get('/friends', function(req, res){
//     //req request, res response
//     res.sendFile(__dirname +'/pages/friends.html');
// })
// app.get('/about', function(req, res){
//     //req request, res response
//     res.sendFile(__dirname +'/pages/about.html');
// });

