const db = require("../models");
const quize_cat = db.quize_categories;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
    // Validate request
    if (!req.body.cat_id) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    // Create a Tutorial
    const us = {
      name: req.body.name,
      cat_id:req.body.cat_id
    };
  
    // Save Tutorial in the database
    quize_cat.create(us)
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
    const cat_id = req.query.cat_id;
    var condition = cat_id ? { cat_id: { [Op.like]: `%${cat_id}%` } } : null;
  
    quize_cat.findAll({ where: condition })
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
  
    quize_cat.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Tutorial with id=" + id
        });
      });
  };

