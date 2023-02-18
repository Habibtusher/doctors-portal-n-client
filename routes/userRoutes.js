const express = require("express");

const { createUser, genarateToken } = require("../controllers/usersCollections");


const router = express.Router();


router.post("/create-user",createUser)
router.get("/jwt",genarateToken)



module.exports = router;