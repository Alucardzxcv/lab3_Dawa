const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Configuración de EJS como motor de plantillas
app.set('view engine', 'ejs');

// Middleware para procesar datos del cuerpo de las solicitudes HTTP
app.use(bodyParser.urlencoded({ extended: true }));


// Directorio de archivos estáticos
app.use(express.static(__dirname + '/public'));

// Ruta de inicio de sesión
app.get('/', (req, res) => {
    res.render('index');
});

//Post
app.post('/pag1', (req, res) => {
    const curso = req.body.curso;
    

    res.render('pag1', {curso});
});

app.post('/pag2', (req, res) => {
    const curso = req.body.curso
    const opciones = req.body.opciones;
    res.render('pag2', {curso:curso,opciones:opciones});
    
});



app.post('/resultados', (req, res) => {
    let curso = req.body.curso;
    let opciones = req.body.opciones;
    let pago = req.body.pago;
    let costo = 0;
    switch(curso){
        case 'JAVA' :
            costo=1200;
                if(pago=='efectivo'){
                    costo=(costo-(costo*(10/100)))
                    res.render('resultados', {curso:curso,opciones:opciones, pago:pago,costo});
                }
                else{
                    costo=costo
                    res.render('resultados', {curso:curso,opciones:opciones, pago:pago,costo});
                }
        break;
        case 'PHP' :
            costo=800;
            if(pago=='efectivo'){
                costo=(costo-(costo*(10/100)))
                res.render('resultados', {curso:curso,opciones:opciones, pago:pago,costo});
            }
            else{
                costo=costo
                res.render('resultados', {curso:curso,opciones:opciones, pago:pago,costo});
            }
        break;
        case 'NET' :
            costo=1500;
            if(pago=='efectivo'){
                costo=(costo-(costo*(10/100)))
                res.render('resultados', {curso:curso,opciones:opciones, pago:pago,costo});
            }
            else{
                costo=costo
                res.render('resultados', {curso:curso,opciones:opciones, pago:pago,costo});
            }
        break;
        default:
            costo=0
            res.render('resultados', {curso:curso,opciones:opciones, pago:pago,costo});
    }

 
// Lógica para procesar los datos y mostrar la vista de confirmación
   
});

// Puerto en el que el servidor escucha las solicitudes
const PORT = 5050;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});