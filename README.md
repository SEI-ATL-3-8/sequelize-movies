## Movies but with Sequelize!

### TO SET UP:

- Create a database (for this exercise name it exactly this `sequelize_movies` or else you'll get errors!)

- initialize npm
- run npm install (it will read the package.json and install both sequalize and pg for us!!)
- normally we'd create a gitignore and add node_modules to it but this is already done for you
- intialize sequelize
- modify config/config.json
- use psql or createdb to create the database remember to name it 'sequelize_movies'
- Create our models with `sequelize model:generate <name, attributes, etc>` (one for each table!)
  - - make sure the the data types are exactly the same as in the erb
- a model called `director`, which should consist of:
  - `name`
- a model called `movie`, which should consist of:

  - `title`
  - `releaseDate`
  - `synopsis`
  - `directorId`

- a model called `userMovie`, which should consist of:

  - `movieId`
  - `userId`

- a model called `user`, which should consist of:

  - `name`

- Once you're done creating your models run sequelize db:migrate
- Check your psql to make sure you have all the tables
- If your migrations ran smoothly then run this command to run the seed files `only run this once!!!!`
- `sequelize-cli db:seed:all`

### ABOUT THIS DATABASE:

Here's what the database looks like:

![erd](./erd.png)
Thus far we've created 1 to many relationships via associations but we can also create many to many relationships as well so remember to add those when you create your models or when as a migration!

### PART 1: CRUD with sequelize

1. Think of your favorite movie that isn't directed by someone on the list of directors. Add that movie to the movies table.
1. Add the director of your new movie to the directors table.
1. Update your new movie to have the correct director.
1. Add yourself to the users table.
1. Add a row to the usersMovies table so that your user has the new movie as a favorite.

### PART 2: Establish relationshiops via sequelize!

1. Select all the movies directed by Alex Garland.
2. Find the director who directed "There Will Be Blood".
3. Find all of Ryan's favorites.
4. Find everyone who added "The Lobster" as a favorite movie.
5. Find the names of all users who favorited a movie directed by Joel Coen. Note that you may get duplicates for the reasons described here: https://stackoverflow.com/questions/23786401/why-do-multiple-table-joins-produce-duplicate-rows. You can remove duplicates like this: https://www.w3schools.com/sql/sql_distinct.asp.

### PART 3: Using our knowledge about associations

1. List the movies with the number of favorites they have.
2. List the names of directors along with the number of favorites that exist for all of the movies they've made, ordered by number of favorites descending.
3. List the user name, director name and favorite count of all of the user/director combinations (based on the users_movies table).
4. Find the favorite director -- the director whose movies have the most favorites.
