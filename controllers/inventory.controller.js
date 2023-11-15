const { Inventory, Category } = require("../models");

// Get all inventories
exports.getAllInventories = async (req, res) => {
  try {
    const inventories = await Inventory.findAll({
      include: [Category],
    });
    res.json(inventories);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Get inventory by ID
exports.getInventoryById = async (req, res) => {
  const { id } = req.params;
  try {
    const inventory = await Inventory.findByPk(id, {
      include: [Category],
    });

    if (!inventory) {
      return res.status(404).json({ error: "Inventory not found" });
    }

    res.json(inventory);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Create a new inventory
exports.createInventory = async (req, res) => {
  const { id_category, inventory_name, stock } = req.body;

  try {
    await Inventory.create({
      id_category,
      inventory_name,
      stock,
    });

    res.status(201).json({ message: "Inventory created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Update inventory by ID
exports.updateInventory = async (req, res) => {
  const { id } = req.params;
  const { id_category, inventory_name, stock } = req.body;

  try {
    const inventory = await Inventory.findByPk(id);

    if (!inventory) {
      return res.status(404).json({ error: "Inventory not found" });
    }

    await inventory.update({
      id_category,
      inventory_name,
      stock,
    });

    res.json({ message: "Inventory updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Delete inventory by ID
exports.deleteInventory = async (req, res) => {
  const { id } = req.params;

  try {
    const inventory = await Inventory.findByPk(id);

    if (!inventory) {
      return res.status(404).json({ error: "Inventory not found" });
    }

    await inventory.destroy();

    res.json({ message: "Inventory deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
