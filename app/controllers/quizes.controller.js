const db = require("../models");
const quize = db.quizes;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
    // Validate request
    if (!req.body.quize_cat_id) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    // Create a Tutorial
    const us = {
      name: req.body.name,
      quize_cat_id:req.body.quize_cat_id
    };
  
    // Save Tutorial in the database
    quize.create(us)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Tutorial."
        });
      });
  };
  //--------------------------------------------------------
// Retrieve all Tutorials from the database.
  exports.findAll = (req, res) => {
    const quize_cat_id = req.query.quize_cat_id;
    var condition = quize_cat_id ? { quize_cat_id: { [Op.like]: `%${quize_cat_id}%` } } : null;
  
    quize.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
  };
//------------------------------------------------------------------------------------
// Find a single Tutorial with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
  
    quize.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Tutorial with id=" + id
        });
      });
  };

