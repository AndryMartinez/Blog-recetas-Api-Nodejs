'use strict'

const express = require("express")
const RecetaCtrl = require("../controllers/recetas")
const auth = require('../middlewares/auth')
const api = express.Router()

/** Home */ api.get('/', (req, res) => {res.status(200).send({ message: 'Bienvenido a recetas app' })})

/*Obtener recetas*/ api.get('/recetas', RecetaCtrl.getRecetas)

/*publicar recetas*/ api.post('/recetas', RecetaCtrl.publicRecetas)

/*Obtener una receta*/ api.get('/recetas/:recetaID', RecetaCtrl.getReceta)

/*enlazar categoria a la receta*/ api.post('/recetas/categoria', RecetaCtrl.Linkcategory)

/*añadir categoria */ api.post('/categoria', RecetaCtrl.publicCategory)

/*listar categorias */ api.get('/categoria', RecetaCtrl.getCategory)

/*listar por categoria*/ api.get('/categoria/:categoryID', RecetaCtrl.getRecetas_byc)


module.exports = api




