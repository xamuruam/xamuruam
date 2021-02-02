const productsRoutes = require('./products');
const fs = require('fs');

const appRouter = (app, fs) => {
  productsRoutes(app, fs);
};

module.exports = appRouter;
