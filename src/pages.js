const res = require('express/lib/response');
const Database = require('./database/db');
const saveOrphanage = require('./database/saveOrphanage')

module.exports = {

  index(request, response) {
    return response.render('index');
  },

  orphanage(request, response) {
    return response.render('orphanage');
  },

  async orphanages(request, response) {
    try {
      const db = await Database;
      const orphanages = await db.all("SELECT * FROM orphanages");
      return response.render('orphanages', {
        orphanages
      });
    } catch (error) {
      console.log(error);
      return res.send('Erro no banco de dados');
    }


  },

  createOrphanage(request, response) {
    return response.render('create-orphanage');
  }
  

}