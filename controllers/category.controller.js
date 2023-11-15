const { Category } = require("../models");

exports.getAllCategories = async (req, res, next) => {
  try {
    const categories = await Category.findAll();
    res.json(categories);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error" });
  }
};

exports.getCategoryById = async (req, res, next) => {
  try {
    const categoryId = req.params.id;
    const category = await Category.findByPk(categoryId);

    if (!category) {
      res.status(404).json({ message: "Category not found" });
    } else {
      res.json(category);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error" });
  }
};

exports.createCategory = async (req, res, next) => {
  try {
    await Category.create(req.body);
    res.status(201).json({ message: "Category created successfuly" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error" });
  }
};

exports.updateCategory = async (req, res, next) => {
  try {
    const categoryId = req.params.id;
    const updatedCategory = await Category.update(req.body, {
      where: { id: categoryId },
    });

    if (updatedCategory[0] === 0) {
      res.status(404).json({ message: "Category not found" });
    } else {
      res.json({ message: "Category updated successfully" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error" });
  }
};

exports.deleteCategory = async (req, res, next) => {
  try {
    const categoryId = req.params.id;
    const deletedCategory = await Category.destroy({
      where: { id: categoryId },
    });

    if (deletedCategory === 0) {
      res.status(404).json({ message: "Category not found" });
    } else {
      res.json({ message: "Category deleted successfully" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error" });
  }
};
