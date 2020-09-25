//
//Imports the require libraries
//
//
var express = require('express');
var jwt =require('jsonwebtoken');
var bodyParser = require('body-parser');



//
// Initialize the express library, aqui agregar cada nueva variable de express que se inicialize
//
var app = express();
var shop = express();
var auth = express();
var catalog = express();



//
//Initializes the bodyParser in the express variable
//
app.use(bodyParser.json());


//
//Permite evitar errores de CORS, IMPORTANTE, NO TOCAR O SÍ NO ES IMPOSIBLE CONECTAR EL BACKEND CON EL SERVER
//
app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


//
//esto agrega un 'controller' tal que todas las apis que la usen necesiten usar la ruta /api/something
//
var api = express.Router();



/*
ESTA PARTE TE TOCA A TI MARTÍN,

Esta api recibe un json del usuario con la información necesaria para registrarse (es la información que aparece en el formulario),
tu trabajo es tomar esa información y verificar sí es valida para ser insertada en la base de datos (osea que el usuario no esté repetido
o algo así).



*/

auth.post('/register',(req,res)=>{
    
    //
    //1.- Verifica que el usuario nos proporcione información valida
    //


    //
    //2.- Sí la información enviada por el usuario es valida, entonces guarda su información en la base de datos.
    //


    //
    //3.- Despues de validar lo anterior, obtener el Id del usuario de la tabla.
    //


    

    //
    //4.- Reemplazar la palabra 'key' por el Id del usuario en el codigo de abajo y ya está
    //
    
    
    //Esto le envia al usuario un certificado usando una key que le proporcionamos nosootrs,
    //ahorita la key es la palabra 'key', pero la idea que eso sea personalizado para cada usuario

    var token = jwt.sign(req.body, 'key');
    console.log(req.body);
    res.json({ "user":req.body.firstName, "token": token});
});

/*
ESTA PARTE TE TOCA A TI MARTÍN,

Esta api recibe un json del usuario con la información necesaria para logearse (es la información que aparece en el formulario de login),
tu trabajo es tomar esa información y verificar sí existe en la base de datos y sí es el caso entonces iniciar su sesión.

//Esto le permite al usuario mantener su sesión cada vez que el compa se registra y cambia de pagina.
    //la idea es que aqui se envia la info del usuario a la base de datos y se genera un token que le da al usuario una sesion,
    //esto se manda al navegador y el navegador lo va a tener guardado de manera segura

*/

auth.post('/login',(req,res)=>{
    
     
    //
    //1.- Verifica que el usuario nos proporcione información valida
    //


    //
    //2.- Sí la información enviada por el usuario es valida, checa que ya exista en la base de datos
    //


    //
    //3.- Despues de validar lo anterior, obtener el Id del usuario de la tabla.
    //


    

    //
    //4.- Reemplazar la palabra 'key' por el Id del usuario en el codigo de abajo y ya está
    //
    
    
    //Esto le envia al usuario un certificado usando una key que le proporcionamos nosootrs,
    //ahorita la key es la palabra 'key', pero la idea que eso sea personalizado para cada usuario

    //signs using the auto generated key and the user information
    var token = jwt.sign(req.body, 'key');
    console.log(req.body);
    res.json({ "user":req.body.email, "token": token});
});


/*
ESTA PARTE TE TOCA A TI MARTÍN,

Esta API obtiene el id de la ruta y busca el producto de la base de datos al que le corresponda dicho Id para devolverselo al usuario

*/

shop.get('/Id/:productId',(req, res)=>{
    
    //
    //1.- Checa que se haya enviado el Id y que este exista en la base de datos
    //
    

    //
    //2.- Luego toma la información, la pasa a un json y se la envia al usuario como con el ejemplo
    //
    // console.log(req.params.productId);
 
     res.json({
         name:"Guitarra",
         image:"https://www.ecestaticos.com/image/clipping/79776773aab795837282c7d4947abaf7/por-que-nos-parece-que-los-perros-sonrien-una-historia-de-30-000-anos.jpg",
         description:"Con la nueva guitarra chingona acá perrona yu know beibi",
         caracteristics:["Es roja","Es chingona","Suena perrón"],
         price:"1500"
       });
 });






/*
ESTA PARTE TE TOCA A TI MARTÍN,


Definir una api que devuelva un array de Jsons con la información de todos y cada uno de los articulos
encontrados en la base de datos. la ruta va a ser:

Es para la vista de "/products"



*/

catalog.get('/all',(req, res)=>{
    
    //
    //1.- Toma toda la información de la base de datos
    //
    

    //
    //2.- Luego le da el formato del ejemplo a cada objeto JSON formado a partir de los registros de la base de datos
    //

    


    /*
    ES IMPORTANTE QUE CADA UNO DE LOS OBJETOS QUE MANDES TENGA LAS PROPIEDADES:
    name,price,ImageUrl,productUrl,caracteristicas

    IGUAL QUE COMO SE ESPECIFICA EN EL EJEMPLO DE ABAJO.

    LA PROPIEDAD CARACTERISTICAS, ES UN ARRAY DE STRINGS EN DONDE VIENEN KEYWORDS CORRESPONDIENTES A CADA OBJETO
    */

     res.json({
         "array":[
            {name:"piano",  price: 10, ImageUrl:"https://www.ecestaticos.com/image/clipping/79776773aab795837282c7d4947abaf7/por-que-nos-parece-que-los-perros-sonrien-una-historia-de-30-000-anos.jpg", productUrl:"http://localhost:4200/product/1", caracteristicas:["Piano"]},
            {name:"Guitarra_Electrica",   price: 10, ImageUrl:"https://www.ecestaticos.com/image/clipping/79776773aab795837282c7d4947abaf7/por-que-nos-parece-que-los-perros-sonrien-una-historia-de-30-000-anos.jpg", productUrl:"http://localhost:4200/product/1", caracteristicas:["Guitarra_Electrica"]},
            {name:"acustic",price: 10, ImageUrl:"https://www.ecestaticos.com/image/clipping/79776773aab795837282c7d4947abaf7/por-que-nos-parece-que-los-perros-sonrien-una-historia-de-30-000-anos.jpg", productUrl:"http://localhost:4200/product/1",caracteristicas:["acustic"] },
            {name:"bateria", price: 10, ImageUrl:"https://www.ecestaticos.com/image/clipping/79776773aab795837282c7d4947abaf7/por-que-nos-parece-que-los-perros-sonrien-una-historia-de-30-000-anos.jpg", productUrl:"http://localhost:4200/product/1", caracteristicas:["bateria"]}
         ]
       });
 });








 
/*
ESTA PARTE TE TOCA A TI MARTÍN,


Definir una api que devuelva un array de Jsons con la información de todos y cada uno de los articulos
encontrados en de la base de datos QUE COINCIDAN DE ALGÚNA FORMA CON EL "TERM" MANDADO POR PARAMETRO EN LA RUTA

Ejemplo:
El usuario escribe:

http://localhost:4200/products/guitarra

Encontonces tu le devuelves un array con todos los objetos que coincidan con "guitarra", ya sea las que tengan guitarra en el name, o en caracteristicas,
o en algún otro lugar.

*/
 catalog.get('/:term',(req, res)=>{
    
    //
    //1.- Tomas el "term" que haya escrito el usuario en la ruta 
    //
    

    //
    //2.- Luego checas que registros  contienen ese "term" en la base de datos y lo pasas a un array de JSONs
    //
    //

    

    //
    //finalmente se lo envías al usuario como en el ejemplo de abajo
    //

    /*
    ES IMPORTANTE QUE CADA UNO DE LOS OBJETOS QUE MANDES TENGA LAS PROPIEDADES:
    name,price,ImageUrl,productUrl,caracteristicas

    IGUAL QUE COMO SE ESPECIFICA EN EL EJEMPLO DE ABAJO.

    LA PROPIEDAD CARACTERISTICAS, ES UN ARRAY DE STRINGS EN DONDE VIENEN KEYWORDS CORRESPONDIENTES A CADA OBJETO
    */
     res.json({
         "array":[
            {name:"piano",  url:"", price: 10, ImageUrl:"https://www.ecestaticos.com/image/clipping/79776773aab795837282c7d4947abaf7/por-que-nos-parece-que-los-perros-sonrien-una-historia-de-30-000-anos.jpg", productUrl:"http://localhost:4200/product/1", caracteristicas:["Piano"]},
            {name:"Guitarra_Electrica",  url:"", price: 10, ImageUrl:"https://www.ecestaticos.com/image/clipping/79776773aab795837282c7d4947abaf7/por-que-nos-parece-que-los-perros-sonrien-una-historia-de-30-000-anos.jpg", productUrl:"http://localhost:4200/product/1", caracteristicas:["Guitarra_Electrica"]},
            {name:"acustic", url:"", price: 10, ImageUrl:"https://www.ecestaticos.com/image/clipping/79776773aab795837282c7d4947abaf7/por-que-nos-parece-que-los-perros-sonrien-una-historia-de-30-000-anos.jpg", productUrl:"http://localhost:4200/product/1",caracteristicas:["acustic"] },
            {name:"bateria",  url:"", price: 10, ImageUrl:"https://www.ecestaticos.com/image/clipping/79776773aab795837282c7d4947abaf7/por-que-nos-parece-que-los-perros-sonrien-una-historia-de-30-000-anos.jpg", productUrl:"http://localhost:4200/product/1", caracteristicas:["bateria"]}
         ]
       });
 });











































//
//Esta parte asigna una ruta a cada objeto de express usado
//
app.use('/api',api);
app.use('/auth', auth);
app.use('/product', shop);
app.use('/products', catalog);


app.listen(63145);
