const express = require("express");
const router = express.Router();
const productController = require("../controllers/productControllers");

router.get("/", productController.getAllProducts);
router.get("/:id", productController.getProductById);
router.delete("/:id", productController.deleteProductById);
router.post("/", productController.addNewProduct);
router.patch("/:id", productController.updateProductById);

module.exports = router;
