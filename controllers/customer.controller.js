const { Customer } = require("../models");

// Get all customers
exports.getAllCustomers = async (req, res) => {
  try {
    const customers = await Customer.findAll();
    res.json(customers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

exports.getCustomerById = async (req, res, next) => {
  try {
    const customerId = req.params.id;
    const customer = await Customer.findByPk(customerId);

    if (!customer) {
      res.status(404).json({ message: "Customer not found" });
    } else {
      res.json(customer);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error" });
  }
};

// Create a new customer
exports.createCustomer = async (req, res) => {
  try {
    await Customer.create(req.body);
    res.status(201).json({ message: "Customer created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Update an existing customer
exports.updateCustomer = async (req, res) => {
  const customerId = req.params.id;
  try {
    await Customer.update(req.body, {
      where: { id: customerId },
    });
    res.json({ message: "Customer updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Delete a customer
exports.deleteCustomer = async (req, res) => {
  const customerId = req.params.id;
  try {
    await Customer.destroy({ where: { id: customerId } });
    res.json({ message: "Customer deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
