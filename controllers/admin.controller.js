const { Admin, Transaction } = require("../models");

// Mendapatkan semua admin beserta transaksinya
exports.getAllAdmins = async (req, res, next) => {
  try {
    const admins = await Admin.findAll({
      include: Transaction,
    });
    res.json(admins);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

// Membuat admin baru
exports.createAdmin = async (req, res, next) => {
  try {
    await Admin.create(req.body);
    res.status(201).json({ message: "Admin created successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

// Mendapatkan detail admin berdasarkan ID
exports.getAdminById = async (req, res, next) => {
  try {
    const adminId = req.params.id;
    const foundAdmin = await Admin.findByPk(adminId, {
      include: Transaction,
    });

    if (!foundAdmin) {
      res.status(404).json({ message: "Admin not found" });
    } else {
      res.json(foundAdmin);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

// Mengupdate admin berdasarkan ID
exports.updateAdmin = async (req, res, next) => {
  try {
    const adminId = req.params.id;
    await Admin.update(req.body, {
      where: { id: adminId },
    });
    res.json({ message: "Admin updated successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

// Menghapus admin berdasarkan ID
exports.deleteAdmin = async (req, res, next) => {
  try {
    const adminId = req.params.id;
    await Admin.destroy({ where: { id: adminId } });
    res.json({ message: "Admin deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};
