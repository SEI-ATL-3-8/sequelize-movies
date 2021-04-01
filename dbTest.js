
const models = require('./models')

// models.userMovie.findAll().then(res=> console.log(res))
// models.user.findAll().then(res=> console.log(res))
// models.director.findAll().then(res=> console.log(res))
// models.movie.findAll().then(res=> console.log(res))

const findMovies = async () => {
    const ryan = await models.user.findOne({
        where:{
            name: 'Ryan'
        }
    })
    const ryansMovies = await ryan.getMovies()
    console.log(ryansMovies)
}
findMovies()