const { Supplier } = require("../models");

// Get all suppliers
exports.getAllSuppliers = async (req, res) => {
  try {
    const suppliers = await Supplier.findAll();
    res.json(suppliers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getSupplierById = async (req, res, next) => {
  try {
    const supplierId = req.params.id;
    const supplier = await Supplier.findByPk(supplierId);

    if (!supplier) {
      res.status(404).json({ message: "Supplier not found" });
    } else {
      res.json(supplier);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error" });
  }
};

// Create a new supplier
exports.createSupplier = async (req, res) => {
  try {
    await Supplier.create(req.body);
    res.status(201).json({ message: "Supplier created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Update an existing supplier
exports.updateSupplier = async (req, res) => {
  const supplierId = req.params.id;
  try {
    await Supplier.update(req.body, {
      where: { id: supplierId },
    });
    res.json({ message: "Supplier updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Delete a supplier
exports.deleteSupplier = async (req, res) => {
  const supplierId = req.params.id;
  try {
    await Supplier.destroy({ where: { id: supplierId } });
    res.json({ message: "Supplier deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
