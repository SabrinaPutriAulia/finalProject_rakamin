const { Transaction } = require("../models");

// Mendapatkan semua transaksi
exports.getAllTransactions = async (req, res, next) => {
  try {
    const transactions = await Transaction.findAll();
    res.json(transactions);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Membuat transaksi baru
exports.createTransaction = async (req, res, next) => {
  try {
    await Transaction.create(req.body);
    res.status(201).json({ message: "Transaction created successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Mendapatkan detail transaksi berdasarkan ID
exports.getTransactionById = async (req, res, next) => {
  try {
    const transactionId = req.params.id;
    const foundTransaction = await Transaction.findByPk(transactionId);

    if (!foundTransaction) {
      res.status(404).json({ message: "Transaction not found" });
    } else {
      res.json(foundTransaction);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Mengupdate transaksi berdasarkan ID
exports.updateTransaction = async (req, res, next) => {
  try {
    const transactionId = req.params.id;
    const updatedTransaction = await Transaction.update(req.body, {
      where: { id: transactionId },
    });

    if (updatedTransaction[0] === 0) {
      res.status(404).json({ message: "Transaction not found" });
    } else {
      res.json({ message: "Transaction updated successfully" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Menghapus transaksi berdasarkan ID
exports.deleteTransaction = async (req, res, next) => {
  try {
    const transactionId = req.params.id;
    await Transaction.destroy({ where: { id: transactionId } });
    res.json({ message: "Transaction deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
