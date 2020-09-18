var express = require('express');
var app = express();
var auth = express();
var jwt =require('jsonwebtoken');
//Body-parser se tiene que instalar
var bodyParser = require('body-parser');

var messages =  [{ text: 'some text1', owner: 'Tim' }, { text: 'other message', owner: 'Jane' }];


app.use(bodyParser.json());
//Esto desactiva el cors para todas las request
app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
//esto agrega un 'controller' tal que todas las apis que la usen necesiten usar la ruta /api/something
var api = express.Router();


api.get('/message', (req, res)=>{
    res.json(messages);
});

api.post('/message', (req, res)=>{
    messages.push(req.body);
    res.sendStatus(200);
});

auth.post('/register',(req,res)=>{
    //esto le permite al usuario mantener su sesión cada vez que el compa se registra y cambia de pagina.
    //la idea es que aqui se envia la info del usuario a la base de datos y se genera un token que le da al usuario una sesion,
    //esto se manda al navegador y el navegador lo va a tener guardado de manera segura

    //conectar a la base de datos e insertar al nuevo usuario


    //obtener el id del nuevo usuario

    //Pasarle como key el id del usuario y que eso reemplaze a la key

    
    //signs using the auto generated key and the user information
    var token = jwt.sign(req.body, 'key');
    console.log(req.body);
    res.json({ "user":req.body.firstName, "token": token});
});


auth.post('/login',(req,res)=>{
    //esto le permite al usuario mantener su sesión cada vez que el compa se registra y cambia de pagina.
    //la idea es que aqui se envia la info del usuario a la base de datos y se genera un token que le da al usuario una sesion,
    //esto se manda al navegador y el navegador lo va a tener guardado de manera segura

    //conectar a la base de datos e insertar al nuevo usuario


    //obtener el id del nuevo usuario

    //Pasarle como key el id del usuario y que eso reemplaze a la key

    
    //signs using the auto generated key and the user information
    var token = jwt.sign(req.body, 'key');
    console.log(req.body);
    res.json({ "user":req.body.email, "token": token});
});


app.use('/api',api);

app.use('/auth', auth);




app.listen(63145);
