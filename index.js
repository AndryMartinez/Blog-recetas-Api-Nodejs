'use strict'




const app = require("./app")
const config = require("./config/config")



app.listen(config.port, () => {
	console.log(`Api Rest funcionando en el ${config.port} port`);
})

