module.exports = (sequelize, Sequelize) => {
    const CATGRY = sequelize.define("categories", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
      },
      name: {
        type: Sequelize.STRING,
        allowNull:false
      }
    });
  
    return CATGRY;
  };