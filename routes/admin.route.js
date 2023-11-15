const express = require("express");
const router = express.Router();
const adminController = require("../controllers/admin.controller");

router.get("/admins", adminController.getAllAdmins);
router.get("/admins/:id", adminController.getAdminById);
router.post("/admins", adminController.createAdmin);
router.put("/admins/:id", adminController.updateAdmin);
router.delete("/admins/:id", adminController.deleteAdmin);

module.exports = router;
