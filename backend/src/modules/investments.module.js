const express = require("express");
const bcrypt = require("bcrypt");
const prisma = require("../db/prisma/client.prisma");

const investmentsRouter = express.Router();

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

module.exports = investmentsRouter;
