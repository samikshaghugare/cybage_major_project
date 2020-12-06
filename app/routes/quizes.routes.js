module.exports = app => {
    const quizes = require("../controllers/quizes.controller");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", quizes.create);

     // Retrieve all Tutorials
     router.get("/", quizes.findAll);

     // Retrieve a single Tutorial with id
    router.get("/:id", quizes.findOne);
  
  

    app.use('/api/quizes', router);
}