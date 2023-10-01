const PirateController = require('../controllers/pirate.controller');

module.exports = (app) => {
    app.post('/api/pirates', PirateController.createPirate);
    app.get('/api/pirates', PirateController.getAllPirates);
    app.get('/api/pirates/:id', PirateController.getPirate);
    app.put('/api/pirates/:id', PirateController.updatePirate);
    app.delete('/api/pirates/:id', PirateController.deletePirate);
};
