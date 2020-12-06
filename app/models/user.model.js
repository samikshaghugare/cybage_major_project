module.exports = (sequelize, Sequelize) => {
    const USERS = sequelize.define("users", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
      },
      name: {
        type: Sequelize.STRING,
        allowNull:false
      },
      email: {
        type: Sequelize.STRING,
        unique:true,
        allowNull:false
      },
      password: {
        type: Sequelize.STRING,
        unique:true,
        allowNull:false
      },
      role_id:{
        type:Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:'roles',
          key:'id'
        }
      }
    });
  
    return USERS;
  };