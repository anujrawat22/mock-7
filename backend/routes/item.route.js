const express = require("express");
const { create, getAll, deleteItem, sort, searchbyname, filterbyCategory } = require("../controller/item");
const { authenticate } = require("../middleware/authenticate");


const ItemRouter = express.Router();

ItemRouter.get("/all",getAll)

ItemRouter.get("/filter",filterbyCategory)

ItemRouter.get("/searchbyname",searchbyname)

ItemRouter.get("/sortItem",sort)

ItemRouter.post("/create",authenticate,create)

ItemRouter.delete("/delete/:Id",deleteItem)


module.exports = {ItemRouter}