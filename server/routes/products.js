const productsRoutes = (app, fs) => {
  const dataPath = './server/data/db.json';

  app.get('/api/products', (req, res) => {
    fs.readFile(dataPath, 'utf8', (err, data) => {
      if (err) {
        throw err;
      }
      res.send(JSON.parse(data));
    });
  });
};
module.exports = productsRoutes;
