const express = require("express");
const router = express.Router();
const projectsController = require("../controllers/projectControllers");

router.get("/", projectsController.getAllProducts);
router.get("/:id", projectsController.getProductById);
router.delete("/:id", projectsController.deleteProductById);
router.post("/", projectsController.addNewProduct);
router.patch("/:id", projectsController.updateProductById);

module.exports = router;
