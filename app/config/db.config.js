module.exports = {
    HOST: "localhost",
    USER: "bhuvan",
    PASSWORD: "admin@123",
    DB: "crudapp",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
  