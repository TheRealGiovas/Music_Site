var express = require('express');
var app = express();
var shop = express();
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

shop.get('/Id/:productId',(req, res)=>{
    
     console.log(req.params.productId);
 
     res.json({
         name:"Guitarra",
         image:"https://www.ecestaticos.com/image/clipping/79776773aab795837282c7d4947abaf7/por-que-nos-parece-que-los-perros-sonrien-una-historia-de-30-000-anos.jpg",
         description:"Con la nueva guitarra chingona acá perrona yu know beibi",
         caracteristics:["Es roja","Es chingona","Suena perrón"],
         price:"$1500"
       });
 });






 
app.use('/api',api);
app.use('/auth', auth);
app.use('/product', shop);


app.listen(63145);
