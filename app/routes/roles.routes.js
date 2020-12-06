module.exports = app => {
    const role = require("../controllers/roles.controller");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", role.create);

     // Retrieve all Tutorials
     router.get("/", role.findAll);

     // Retrieve a single Tutorial with id
     router.get("/:id", role.findOne);
  

    app.use('/api/roles', router);
}