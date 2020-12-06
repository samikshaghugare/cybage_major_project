module.exports = (sequelize, Sequelize) => {
    const ROLES = sequelize.define("roles", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
      },
      role_name: {
        type: Sequelize.STRING,
        allowNull:false
      }
    });
  
    return ROLES;
  };