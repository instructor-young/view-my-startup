const express = require("express");
const companiesRouter = require("./companies.module");
const investmentsRouter = require("./investments.module");

const router = express.Router();

router.use("/companies", companiesRouter);
router.use("/investments", investmentsRouter);

module.exports = router;
