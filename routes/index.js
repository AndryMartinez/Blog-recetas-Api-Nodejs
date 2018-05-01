'use strict'

const express = require("express")
const RecetaCtrl = require("../controllers/recetas")
const auth = require('../middlewares/auth')
const api = express.Router()


/** Home */ api.get('/', (req, res) => {res.status(200).send({ message: 'Bienvenido a recetas app' })})


///////////Obtener

/*Obtener recetas*/ api.get('/recetas', RecetaCtrl.getRecetas)

/*Obtener una receta*/ api.get('/recetas/:recetaID', RecetaCtrl.getReceta)

/*listar categorias */ api.get('/categoria', RecetaCtrl.getCategory)

/*listar por categoria*/ api.get('/categoria/:categoryID', RecetaCtrl.getRecetas_byc)


///////////Publicar

/*publicar recetas*/ api.post('/recetas', RecetaCtrl.publicRecetas)

/*añadir categoria */ api.post('/categoria', RecetaCtrl.publicCategory)



///////////Borrar

/* Borrar Categoria */ api.delete('/categoria/:categoryID', RecetaCtrl.deleteC)

/* Borrar receta */ api.delete('/recetas/:recetaID', RecetaCtrl.deleteR)


/////////Actualizar 

/* Actualizar Receta */ api.put('/recetas/:recetaID', RecetaCtrl.updateR)

module.exports = api




