const db = require("../models");
const user = db.users;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
    // Validate request
    if (!req.body.role_id) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    // Create a Tutorial
    const us = {
    
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      role_id:req.body.role_id
    };
  
    // Save Tutorial in the database
    user.create(us)
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
    const role_id = req.query.role_id;
    var condition = role_id ? { role_id: { [Op.like]: `%${role_id}%` } } : null;
  
    user.findAll({ where: condition })
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
  
    user.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Tutorial with id=" + id
        });
      });
  };

