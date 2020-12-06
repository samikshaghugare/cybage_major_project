module.exports = (sequelize, Sequelize) => {
    const QUES = sequelize.define("questions", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true
      },
      question: {
        type: Sequelize.STRING,
        allowNull:false
      },
      option1: {
        type: Sequelize.STRING,
        allowNull:false
      },
      option2: {
        type: Sequelize.STRING,
        allowNull:false
      },
      option3: {
        type: Sequelize.STRING,
        allowNull:false
      },
      option4: {
        type: Sequelize.STRING,
        allowNull:false
      },
      correct_option: {
        type: Sequelize.STRING,
        allowNull:false
      },
      quize_id:{
        type:Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:'quizes',
          key:'id'
        }
      }
    });
  
    return QUES;
  };