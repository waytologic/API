module.exports = app => {
    const stocks = require("../controllers/market.controller.js");
  
    var router = require("express").Router();
  
    // Create a new stocks
    router.post("/", stocks.create);
  
    // Retrieve all stocks
    router.get("/", stocks.findAll);
  
  
    // Retrieve a single user with id
    router.get("/:id", stocks.findOne);
  
    // Update a Stocks with id
    router.put("/:id", stocks.update);
  
    // Delete a Users with id
    router.delete("/:id", stocks.delete);
  
    // Delete all Users
    router.delete("/", stocks.deleteAll);
  
    app.use('/stocks', router);
  };
  