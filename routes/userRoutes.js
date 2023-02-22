const express = require("express");

const { createUser, genarateToken, getUser,updateUser, isAdmin, deleteUser } = require("../controllers/usersCollections");
const { VerifyToken, VerifyAdmin } = require("../middlewares/verifyUser");

const router = express.Router();


router.post("/create-user",createUser)
router.get("/jwt",genarateToken)
router.get("/get-users",VerifyToken,getUser)
router.get("/is-admin/:email",isAdmin)
router.put("/update-users/admin/:id",VerifyAdmin,updateUser)
router.delete("/delete/user/:id",VerifyAdmin,deleteUser)



module.exports = router;