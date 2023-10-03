const db = require("../models");
const Stocks = db.stocks;
const Op = db.Sequelize.Op;

// Create and Save a new stocks 
exports.create = (req, res) => {
  // Validate request
  if (!req.body.dates) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Stocks
  const stock = {   
    dates: req.body.dates,
    open_price: req.body.open_price,
    high_price: req.body.high_price,
    low_price: req.body.low_price,
    close_price: req.body.close_price,
    
  };

  // Save Stocks in the database
  Stocks.create(stock)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Stocks Markets."
      });
    });
};

// Retrieve all Users from the database.
exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

  Stocks.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving User."
      });
    });
};

// Find a single user with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Stocks.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Stocks with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Stocks with id=" + id
      });
    });
};

// Update a Users by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Stocks.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Stocks was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Stocks with id=${id}. Maybe User was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating User with id=" + id
      });
    });
};

// Delete a Stocks with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Stocks.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Stocks items was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete User with id=${id}. Maybe User was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Stocks items with id=" + id
      });
    });
};

// Delete all Stocks from the database.
exports.deleteAll = (req, res) => {
    Stocks.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Stocks were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Stocks."
      });
    });
};
