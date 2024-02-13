const express = require("express");
const router = express.Router();
const signController = require("../controllers/signControllers");
 
router.get("/", signController.getAllSignUsers);
// router.get("/:id", productController.getProductById);
router.delete("/:id", signController.deleteUsersById);
router.post("/", signController.addNewSignUsers);
// router.patch("/:id", productController.updateProductById);

module.exports = router;
