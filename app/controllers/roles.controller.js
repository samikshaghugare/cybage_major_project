const db = require("../models");
const role = db.roles;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
    // Validate request
    if (!req.body.role_name) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    // Create a Tutorial
    const ro = {
        role_name: req.body.role_name,
    };
  
    // Save Tutorial in the database
    role.create(ro)
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
  const role_name = req.query.role_name;
  var condition = role_name ? { role_name: { [Op.like]: `%${role_name}%` } } : null;

  role.findAll({ where: condition })
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

  role.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Tutorial with id=" + id
      });
    });
};


