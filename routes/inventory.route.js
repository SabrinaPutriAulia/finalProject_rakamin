const express = require("express");
const router = express.Router();
const inventoryController = require("../controllers/inventory.controller");

router.get("/inventories", inventoryController.getAllInventories);
router.get("/inventories/:id", inventoryController.getInventoryById);
router.post("/inventories", inventoryController.createInventory);
router.put("/inventories/:id", inventoryController.updateInventory);
router.delete("/inventories/:id", inventoryController.deleteInventory);

module.exports = router;
