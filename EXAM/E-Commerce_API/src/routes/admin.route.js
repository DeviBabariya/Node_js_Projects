const express = require("express");
const { verifytoken, Roleverify } = require("../middleware/verifytoken");
const { Editadmin } = require("../controller/admin.controller");

const routes = express.Router();

routes.put("/edit-admin/:id", verifytoken, Roleverify("Admin"), Editadmin);

module.exports = routes;