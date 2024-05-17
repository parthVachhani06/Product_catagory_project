
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser')
const upload = require("../midlewares/upload");
const dc = require("../controllers/productcontroller");
const signUPcontroller = require('../controllers/signUpcontrooler');
const signInconcntroller = require('../controllers/signIncontroller');




router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());


router.get('/',dc.homecontroller);
router.post('/productForm',upload.single('avatar'), dc.updatecontroller);
router.get('/views',dc.viewcontroller);
router.get("/deleteproduct/:id", dc.deletecontroller);
router.get("/editproduct/:id",dc.editcontroller)

router.post("/signUp",signUPcontroller.signUP)
router.post("/signIn",signInconcntroller.signIn)




module.exports = router;