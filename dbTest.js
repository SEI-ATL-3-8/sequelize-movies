
const models = require('./models')

models.userMovie.findAll().then(res=> console.log(res))