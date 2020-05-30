const swaggerAutogen = require('swagger-autogen')()

const outputFile = './src/test/swagger_output.json'
const endpointsFiles = ['./src/routes/products-routes.js']

swaggerAutogen(outputFile, endpointsFiles)