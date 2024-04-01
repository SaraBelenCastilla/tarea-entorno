const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config()
const PORT = process.env.PORT || ''



const app = express();
app.use(cors())
app.use(bodyParser.json()) 

const infoApi =[
    {
        id:0,
      titulo:'Introduccion',
       nombre: 'Sara Castilla',
       mensaje:'Hola como estas, quedamos el otro día para hablar del proyecto.Que os parece si esperamos a que estamos todos',
       icon:'S'
    },
    {
        id:1,
        titulo:'proyecto aceptado',
        nombre: 'Cristina Heredia',
        mensaje:'Hola como estás, si estoy de acuerdo, podemos empezar cuando quieras.Tengo algunas ideas que podemos utilizar',  
        icon:'C'
    },
    {
        id:2,
        titulo: 'nueva entrada',
        nombre: 'Noemi Cabreras',
        mensaje: ' hola ya estoy aquí , espero que no hayais empezado sin mí. No he podido conectarme antes. ¿me he pardido algo?',
        icon:'N'
    },
    {
        id:3,
        titulo: ' documento adjunto ',
        nombre:'Jesus Perez',
        mensaje:'buenas, os he enviado un esquema de la hoja de ruta que tenemos que llevar, a ver que os parece. Echarle un vistazo y hablamos',
        icon:'J'

    }, {
        id:4,
        titulo: 'nuevo mensaje',
        nombre:'Jesus Perez',
        mensaje:'podemos comenzar repartiendo las tareas entre nosotros y trabajando en equipos de una odos personas por equipo',
        icon:'J'

    }, {
        id:5,
        titulo: 'respuesta enviada',
        nombre:'Cristina Heredia',
        mensaje:'a mí me parece pecfecto, pero podríamos agrupar tareas para compensar el trabajo, ya que hay unas tereas más complicadas.',
        icon:'C'

    }
]
app.get('/inicio',(req,res)=>{
    let array = infoApi.map((info =>{
        return{
            id: info.id,
            titulo:info.titulo,
            nombre:info.nombre,
            mensaje:info.mensaje,
            icono:info.icon
        }
        
    }));

     console.log({inicio:array});
     res.json({inicio:array})
})




app.listen(PORT,()=>{
    console.log('servidor levantado');
})