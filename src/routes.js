const express = require('express');
const multer = require('multer');


const uploadConfig = require('./config/upload');
const UserController = require('./controllers/UserController');
const SessionControler = require('./controllers/SessionController');
const PlaceController = require('./controllers/PlaceController');


const routes = express.Router();
const upload = multer(uploadConfig);

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);
routes.post('/login', SessionControler.store);
routes.patch('/users/:user_id/update', upload.single('avatar'), UserController.update);

routes.get('/users/:user_id/places', PlaceController.index);
routes.post('/users/:user_id/places', upload.single('thumbnail'), PlaceController.store);
routes.delete('/users/:place_id/places', PlaceController.destroy);


module.exports = routes;