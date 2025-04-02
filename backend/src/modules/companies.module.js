const express = require("express");
const prisma = require("../db/prisma/client.prisma");
const { getSurroundingCompanies } = require("../utils/functions.utils");

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

companiesRouter.post("/:companyId/compare", async (req, res, next) => {
  const companyId = req.params.companyId;
  const companyIdsToCompare = req.body;
  const companyIds = [companyId, ...companyIdsToCompare];

  const companies = await prisma.company.findMany({
    where: { id: { in: companyIds } },
  });

  res.status(200).json(companies);
});

companiesRouter.get("/:companyId/rank", async (req, res, next) => {
  const companyId = req.params.companyId;
  const sorting = req.query.sorting;
  const [criteria, direction] = sorting.split(",");
  const orderBy = `"${criteria}" ${direction.toUpperCase()}`;
  const query = `
    SELECT
      *,
      RANK() OVER (ORDER BY ${orderBy}) AS "rank"
    FROM "Company"
  `;

  const companies = await prisma
    .$queryRawUnsafe(query)
    .then((companies) =>
      companies.map((c) => ({ ...c, rank: Number(c.rank) }))
    );
  const result = getSurroundingCompanies(companies, companyId, 5);

  res.status(200).json(result);
});

module.exports = companiesRouter;
