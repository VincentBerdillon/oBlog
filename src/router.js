const express = require("express");

const router = express.Router();

const controller = require("./controller");

//*routes

router.get("/", controller.pageAcceuil);
router.get("/article/:id", controller.pageArticle);
router.get("/categories", controller.pageCategories);

module.exports=router;