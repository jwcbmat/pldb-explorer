const express = require("express");
const dataHandler = require("./dataHandler.js");

const router = express.Router();

router.get("/data", dataHandler.getData);

router.get("/data/filter", dataHandler.filterData);

router.get("/data/language/:name", dataHandler.getLanguage);

router.get("/data/sort", dataHandler.sortData);

module.exports = router;
