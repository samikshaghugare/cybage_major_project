module.exports = (sequelize, Sequelize) => {
    const QUIZECAT = sequelize.define("quize_categories", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
      },
      name: {
        type: Sequelize.STRING,
        allowNull:false
      },
      cat_id:{
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
            model:'categories',
            key:'id'
          }
      }
    });
  
    return QUIZECAT;
  };