const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger_output.json'
const endpointsFiles = ['./src/routes/products-routes.js','./src/routes/index-routes.j' ]

swaggerAutogen(outputFile, endpointsFiles).then(()=>{
    require('../bin/server.js')
})