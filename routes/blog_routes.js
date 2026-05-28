const express = require(express);
const router = express.Router();

//importing the controllers
const createpost = require('../controllers/createPost');


//setting up api routes
router.post("createpost",createpost);