const express = require("express");
const router = express.Router();
const supplierController = require("../controllers/supplier.controller");

router.get("/suppliers", supplierController.getAllSuppliers);
router.get("/suppliers/:id", supplierController.getSupplierById);
router.post("/suppliers", supplierController.createSupplier);
router.put("/suppliers/:id", supplierController.updateSupplier);
router.delete("/suppliers/:id", supplierController.deleteSupplier);

module.exports = router;
