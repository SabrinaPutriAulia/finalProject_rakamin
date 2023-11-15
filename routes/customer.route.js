const express = require("express");
const router = express.Router();
const customerController = require("../controllers/customer.controller");

router.get("/customers", customerController.getAllCustomers);
router.get("/customers/:id", customerController.getCustomerById);
router.post("/customers", customerController.createCustomer);
router.put("/customers/:id", customerController.updateCustomer);
router.delete("/customers/:id", customerController.deleteCustomer);

module.exports = router;
