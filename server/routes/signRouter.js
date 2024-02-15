const express = require("express");
const router = express.Router();
const signController = require("../controllers/signControllers");

router.get("/users", signController.getAllSignUsers);
router.post("/users", signController.addNewSignUsers);
router.patch("/users/:id", signController.updateUsersById);
router.delete("/users/:id", signController.deleteUsersById);
router.post("/signup", signController.signup);
router.post("/signin", signController.signin);
// router.post("/logout", signController.logout);

module.exports = router;
