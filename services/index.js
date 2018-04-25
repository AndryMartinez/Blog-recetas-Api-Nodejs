'use strict'

const jwt = require("jwt-simple")
const moment = require("moment")
const connection = require("../config/conexion")
const config = require("../config/config")


function createToken(result) {
	
	const payload = {

		sub: result.id,
		iat: moment().unix(),
		exp: moment().add(14,'days').unix()
	}

	return jwt.encode(payload,config.SECRET_TOKEN)
}


function decodeToken(token) {

	const decoded = new Promise((resolve,reject) => {
		try{ 
			const payload = jwt.decode(token,config.SECRET_TOKEN)

			if (payload.exp < moment().unix()) {
				reject({
					status : 1,
					message : 'token expirado'
				})
		}
		resolve(payload.sub)
		}catch(err){
			reject({
				status : 500,
				message: 'token invalido'
			})
		}

	})

	return decoded
}



module.exports = {

	createToken,
	decodeToken
}

