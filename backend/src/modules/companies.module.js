const express = require("express");
const prisma = require("../db/prisma/client.prisma");

const companiesRouter = express.Router();

companiesRouter.get("/", async (req, res, next) => {
  const companies = await prisma.company.findMany({
    orderBy: { realInvestmentAmount: "desc" },
  });

  res.json(companies);
});

module.exports = companiesRouter;
