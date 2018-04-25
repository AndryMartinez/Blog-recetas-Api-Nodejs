'use strict'

const connection = require("../config/conexion")
const bcrypt = require('bcrypt-nodejs');
const services = require("../services")

connection.connect();


///METODOS PARA RECETAS

function getRecetas(req, res) {

    connection.query("SELECT * FROM receta", function(err, result) {
        if (err) {
            res.status(500).send("No hay Recetas publicadas")
        } else {
            res.status(200).send({
                result
            });
        }
    });

}



function getReceta(req, res) {

    connection.query("SELECT * FROM receta WHERE id=" + "'" + req.params.recetaID + "'", function(err, result) {
        if (err) {
            console.log("No hay Recetas con esa id")
        } else {
            res.status(200).send({
                result
            });
        }
    });

}

function publicRecetas(req,res) {

        var sql = "INSERT INTO receta (titulo,contenido,flayer) VALUES ('" + req.body.title + "','" + req.body.content + "','" + req.body.flayer + "');" ;
       connection.query(sql, function(err, result) {
        if (err) {
            res.status(404).send("No se pudo publicar la receta")
            
        } else {     

            res.status(200).send("receta publicada!")

        }
    });
    
}


////METODOS PARA CATEGORIAS

function getCategory(req, res) {

    connection.query("SELECT * FROM categorias", function(err, result) {
        if (err) {
            res.status(500).send("No hay categorias")
        } else {
            res.status(200).send({
                result
            });
        }
    });

}

function getRecetas_byc(req, res) {

    connection.query("SELECT * FROM r_c INNER JOIN categorias ON r_c.id_c = categorias.id INNER JOIN receta ON r_c.id_r = receta.id where categorias.id ="+req.params.categoryID+"", function(err, result) {
        if (err) {
            res.status(500).send("No hay Recetas de esta categoria")
        } else {
            res.status(200).send({
                result
            });
        }
    });

}


function publicCategory(req,res) {

        var sql = "INSERT INTO categorias (name) VALUES ('" + req.body.nombre + "');" ;
       connection.query(sql, function(err, result) {
        if (err) {
            res.status(404).send("No se pudo agregar la categoria")
            
        } else {     

            res.status(200).send("categoria agregada")

        }
    });
    
}

function Linkcategory(req,res) {

        var sql = "INSERT INTO r_c (id_r,id_c) VALUES ('" + req.body.r + "','" + req.body.c + "');" ;
       connection.query(sql, function(err, result) {
        if (err) {
            res.status(404).send("No se pudo enlazar a la categoria")
            
        } else {     

            res.status(200).send("categoria enlazada!")

        }
    });
    
}


module.exports = {
  getRecetas,
  publicRecetas,
  Linkcategory,
  publicCategory,
  getReceta,
  getRecetas_byc,
  getCategory
}