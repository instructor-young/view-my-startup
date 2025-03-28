const express = require("express");
const prisma = require("../db/prisma/client.prisma");

const companiesRouter = express.Router();

companiesRouter.get("/", async (req, res, next) => {
  const companies = await prisma.company.findMany();

  res.json(companies);
});

companiesRouter.get("/:companyId", async (req, res, next) => {
  const companyId = req.params.companyId;
  const company = await prisma.company.findUnique({
    where: { id: companyId },
    include: {
      virtualInvestments: {
        omit: { encryptedPassword: true },
        orderBy: { amount: "desc" },
      },
    },
  });

  res.json(company);
});

module.exports = companiesRouter;
