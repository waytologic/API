module.exports = (sequelize, Sequelize) => {
    const Users = sequelize.define("users", {
      name: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      phoneno: {
        type: Sequelize.NUMBER
      },
    });
  
    return Users;
  };
  