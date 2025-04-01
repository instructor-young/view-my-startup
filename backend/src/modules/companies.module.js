const express = require("express");
const prisma = require("../db/prisma/client.prisma");

const companiesRouter = express.Router();

/**
 * 전체 스타트업 목록
 */
companiesRouter.get("/", async (req, res, next) => {
  const { search } = req.query;

  let companies = [];
  if (search) {
    companies = await prisma.company.findMany({
      where: { name: { contains: search } },
    });
  } else {
    companies = await prisma.company.findMany();
  }

  res.json(companies);
});

/**
 * 스타트업 상세 가져오기
 */
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

companiesRouter.post("/:companyId/compare", (req, res, next) => {
  const companyIdsToCompare = req.body;
});

module.exports = companiesRouter;
