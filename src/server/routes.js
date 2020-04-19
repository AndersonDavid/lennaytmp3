const express = require('express');
const routesController = express.Router();
const getDataController = require('./controllers/getDataController');

routesController.post('/sendid', getDataController.handleID);

routesController.post('/sendinfoaudio', getDataController.getInfoId3);

routesController.get('/dlmp3/:file', getDataController.dlFileMp3)

routesController.get('/delfromserver', getDataController.delFromServer)

module.exports = routesController;
