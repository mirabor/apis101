module.exports = (sequelize, Sequelize) => {
  const Movie = sequelize.define("movie", {
    id: {
      type: Sequelize.STRING,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING
    },
    genre: {
      type: Sequelize.STRING
    },
    img: {
      type: Sequelize.STRING
    }
  });

  return Movie;
};
