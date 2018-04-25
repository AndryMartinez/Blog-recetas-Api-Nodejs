DROP DATABASE IF EXISTS recetas;

CREATE DATABASE recetas;


CREATE TABLE receta (

	id int AUTO_INCREMENT,
	titulo varchar(255),
	contenido varchar(1000),
	flayer varchar(500),
	fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	view int(255) NOT NULL DEFAULT '0',
	PRIMARY KEY (id)
);

CREATE TABLE categorias (

	id int AUTO_INCREMENT,
	name varchar(255),
	PRIMARY KEY (id)
);


CREATE TABLE r_c(
	id_r int,
	id_c int,
	FOREIGN KEY (id_r) REFERENCES receta(id),
	FOREIGN KEY (id_c) REFERENCES categorias(id),
	PRIMARY KEY (id_r,id_c)
);


