const express = require("express");
const { verifytoken, Roleverify } = require("../middleware/verifytoken");
const uploadImage = require("../middleware/uploadImg");
const { addProduct, EditProduct, DeleteProduct, Viewallproduct, viewSingleProduct } = require("../controller/product.controller");

const routes = express.Router();

routes.post("/add-product", verifytoken, Roleverify("Admin"), uploadImage.single("image"), addProduct);
routes.put("/edit-product/:id", verifytoken, Roleverify("Admin"), uploadImage.single("image"), EditProduct);
routes.delete("/delete-product/:id", verifytoken, Roleverify("Admin"), DeleteProduct);
routes.get("/view-all-product", verifytoken, Roleverify("Admin","User"), Viewallproduct);
routes.get("/view-single-product/:id", verifytoken, Roleverify("Admin","User"), viewSingleProduct)
module.exports = routes;