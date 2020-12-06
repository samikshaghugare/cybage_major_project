module.exports = (sequelize, Sequelize) => {
    const QUIZES = sequelize.define("quizes", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
      },
      name: {
        type: Sequelize.STRING,
        allowNull:false
      },
      quize_cat_id:{
        type: Sequelize.INTEGER,
        allowNull:false,
        references:{
            model:'quize_categories',
            key:'id'
          }
      }
    });
  
    return QUIZES;
  };