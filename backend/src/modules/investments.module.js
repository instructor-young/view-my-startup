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

module.exports = investmentsRouter;
