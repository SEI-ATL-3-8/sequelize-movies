const models = require('./models')

const alexsMovies = async () => {
  const alex = await models.director.findOne({
    where: {
      name: 'Alex Garland'
    }
  })

  const movies = await alex.getMovies()

  console.log(movies);
}
// alexsMovies()

const bloodDirector = async () => {
  const blood = await models.movie.findOne({
    where: {
      title: 'There Will Be Blood'
    }
  })

  const director = await blood.getDirector()

  console.log(director);
}
// bloodDirector()


const ryansFavs = async () => {
  const ryan = await models.user.findOne({
    where: {
      name: 'Ryan'
    }
  })

  const movies = await ryan.getMovies()

  console.log(movies);
}
// ryansFavs()


const everyoneLovesWhiplash = async() => {
  const pete = await models.user.findOne({
    where: {
      name: 'Pete'
    }
  })

  const dexter = await models.user.findOne({
    where: {
      name: 'Dexter'
    }
  })

  const whiplash = await models.movie.findOne({
    where: {
      title: 'Whiplash'
    }
  })

  // these accomplish the same thing!
  // inserting a row into usersMovies
  pete.addMovie(whiplash)
  whiplash.addUser(dexter)
}
// everyoneLovesWhiplash()

const whoLikesWhiplash = async () => {
  const whiplash = await models.movie.findOne({
    where: {
      title: 'Whiplash'
    }
  })

  const likers = await whiplash.getUsers()

  console.log(likers);
}
whoLikesWhiplash()




