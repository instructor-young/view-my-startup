const express = require("express");
const bcrypt = require("bcrypt");
const prisma = require("../db/prisma/client.prisma");

const investmentsRouter = express.Router();

investmentsRouter.get("/", async (req, res, next) => {
  const companies = await prisma.$queryRaw`
  SELECT
    c.*,
    COALESCE(SUM(i.amount), 0) AS "totalVirtualInvestmentAmount"
  FROM "Company" c
  INNER JOIN "Investment" i ON c.id = i."companyId"
  GROUP BY c.id
`;

  res.json(companies);
});

investmentsRouter.post("/", async (req, res, next) => {
  try {
    const { companyId, investorName, amount, comment, password } = req.body;
    if (!companyId || !investorName || !amount || !comment || !password)
      throw new Error("Invalid input");

    const encryptedPassword = await bcrypt.hash(password, 12);
    const investment = await prisma.investment.create({
      data: { companyId, investorName, amount, comment, encryptedPassword },
      omit: { encryptedPassword: true },
    });

    res.status(201).json(investment);
  } catch (e) {
    next(e);
  }
});

investmentsRouter.put("/:investmentId", async (req, res, next) => {
  try {
    const { investmentId } = req.params;
    const { password, investorName, amount, comment, newPassword } = req.body;
    if (!password || !investorName || !amount || !comment)
      throw new Error("Invalid input");
    let investment = await prisma.investment.findUnique({
      where: { id: investmentId },
    });

    const isValid = await bcrypt.compare(
      password,
      investment.encryptedPassword
    );
    if (!isValid) throw new Error("Incorrect password");

    const encryptedPassword = newPassword
      ? await bcrypt.hash(newPassword, 12)
      : undefined;

    investment = await prisma.investment.update({
      where: { id: investmentId },
      data: { investorName, amount, comment, encryptedPassword },
      omit: { encryptedPassword: true },
    });

    res.status(200).json(investment);
  } catch (e) {
    next(e);
  }
});

investmentsRouter.delete("/:investmentId", async (req, res, next) => {
  try {
    const { investmentId } = req.params;
    const { password } = req.body;
    const investment = await prisma.investment.findUnique({
      where: { id: investmentId },
    });

    const isValid = await bcrypt.compare(
      password,
      investment.encryptedPassword
    );
    if (!isValid) throw new Error("Incorrect password");

    await prisma.investment.delete({ where: { id: investmentId } });

    res.status(204).send();
  } catch (e) {
    next(e);
  }
});

investmentsRouter.post(
  "/:investmentId/check-password",
  async (req, res, next) => {
    try {
      const { investmentId } = req.params;
      const { password } = req.body;
      const investment = await prisma.investment.findUnique({
        where: { id: investmentId },
      });

      const isCorrect = await bcrypt.compare(
        password,
        investment.encryptedPassword
      );

      res.status(200).json(isCorrect);
    } catch (e) {
      next(e);
    }
  }
);

module.exports = investmentsRouter;
