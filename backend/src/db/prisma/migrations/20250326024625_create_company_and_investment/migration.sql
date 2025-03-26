-- CreateTable
CREATE TABLE "Company" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "realInvestmentAmount" INTEGER NOT NULL,
    "revenue" INTEGER NOT NULL,
    "numberOfEmployees" INTEGER NOT NULL,
    "pickAsMyStartupCount" INTEGER NOT NULL,
    "pickAsComparisionCount" INTEGER NOT NULL,

    CONSTRAINT "Company_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Investment" (
    "id" TEXT NOT NULL,
    "investorName" TEXT NOT NULL,
    "amount" TEXT NOT NULL,
    "comment" TEXT NOT NULL,
    "encryptedPassword" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Investment_pkey" PRIMARY KEY ("id")
);
