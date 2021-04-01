
const models = require('./models')

// models.userMovie.findAll().then(res=> console.log(res))
// models.user.findAll().then(res=> console.log(res))
// models.director.findAll().then(res=> console.log(res))
// models.movie.findAll().then(res=> console.log(res))

const findUserMovies = async () => {
    const ryan = await models.user.findOne({
        where:{
            name: 'Ryan3'
        }
    })
    const ryansMovies = await ryan.getMovies()
    console.log(ryansMovies)
}
// findUserMovies()

const createMovie = () => {
    models.movie.create({
        title: 'Spirited Away',
        synopsis:'10-year-old Chihiro (Rumi Hiiragi) and her parents (Takashi Naitô, Yasuko Sawaguchi) stumble upon a seemingly abandoned amusement park.'
    })
}
// createMovie()
const addDirector = () => {
    models.director.create({
        name:'Hayao Miyazaki'
    })
}
// addDirector()

let linkMovieAndDirector = async () => {
    
    try {
        let spiritedAway = await models.movie.findOne({
            where: {
                title:'Spirited Away'
            }
        })
        let director = await models.director.findOne({
            where: {
                name: 'Hayao Miyazaki'
            }
        })
        director.addMovie(spiritedAway)
    } catch (error) {
        console.log(error.message)
    }
}
// linkMovieAndDirector()
// maybe show parameters here 

let addUser = async () => {
    models.user.create({
        name: 'Ryan3'
    })
}
// addUser()
let addUserBookmark = async () => {
    let user = await models.user.findOne({
        where: {
            name: 'Ryan3'
        }
    })
    let movie = await models.movie.findOne({
        where: {
            title:'Spirited Away'
        }
    })
    models.userMovie.create({
        movieId: movie.id,
        userId: user.id
    })
    console.log(user.id)
    console.log(movie.id)
} 
// addUserBookmark()

let findDirectorMovies = async () => {
    let director = await models.director.findOne({
        where: {
            name: 'Alex Garland'
        }
    })
    let directorMovies = await models.movie.findAll({
        where:{
            directorId: director.id
        }
    })
    console.log(directorMovies)
}
findDirectorMovies()