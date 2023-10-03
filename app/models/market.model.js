module.exports = (sequelize, Sequelize) => {
    const Stocks = sequelize.define("stocks", {
      dates: {
        type: Sequelize.DATE
      },
      open_price: {
        type: Sequelize.DECIMAL
      },
      close_price: {
        type: Sequelize.DECIMAL
      },
      high_price: {
        type: Sequelize.DECIMAL
      },
      low_price: {
        type: Sequelize.DECIMAL
      },
      
    });
  
    return Stocks;
  };
  