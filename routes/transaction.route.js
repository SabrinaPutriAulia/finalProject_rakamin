const express = require("express");
const router = express.Router();
const transactionController = require("../controllers/transaction.controller");

router.get("/transactions", transactionController.getAllTransactions);
router.get("/transactions/:id", transactionController.getTransactionById);
router.post("/transactions", transactionController.createTransaction);
router.put("/transactions/:id", transactionController.updateTransaction);
router.delete("/transactions/:id", transactionController.deleteTransaction);

module.exports = router;
