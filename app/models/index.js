const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);
db.users = require("./user.model")(sequelize, Sequelize);
db.roles = require("./roles.model")(sequelize, Sequelize);
db.categories = require("./categories.model")(sequelize, Sequelize);
db.quize_categories = require("./quize_categories.model")(sequelize, Sequelize);
db.quizes = require("./quizes.model")(sequelize, Sequelize);
db.questions = require("./questions.model")(sequelize, Sequelize);


module.exports = db;