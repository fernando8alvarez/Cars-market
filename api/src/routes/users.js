const { Router } = require("express");
const {
  getAllUsers,
  createUser,
  getUserById,
  premiumUser,
  getEmails
 
} = require("../controllers/users");

const router = Router();

router.get("/", getAllUsers);
router.get("/emails", getEmails);
router.post("/", createUser);
router.get("/:id", getUserById);
router.put("/premium/:email",premiumUser)

//router.post("/", addCars)

module.exports = router;
