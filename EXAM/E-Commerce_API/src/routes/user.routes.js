    const express = require("express");
    const { verifytoken, Roleverify } = require("../middleware/verifytoken");
    const { Edituser, Deleteuser, viewUser } = require("../controller/user.controller");

    const routes = express.Router();

    routes.get("/view-user", verifytoken, Roleverify("Admin","User"), viewUser);
    routes.put("/edit-user/:id", verifytoken, Roleverify("Admin","User"), Edituser);
    routes.delete("/delete-user/:id", verifytoken, Roleverify("Admin","User"), Deleteuser);

    module.exports = routes;