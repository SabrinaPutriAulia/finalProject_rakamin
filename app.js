const express = require("express");
const app = express();

require("dotenv").config();

app.use(express.json());

const router = require("./routes");
app.use("/api", router.categoryRouter);
app.use("/api", router.supplierRouter);
app.use("/api", router.adminRouter);
app.use("/api", router.customerRouter);
app.use("/api", router.inventoryRouter);
app.use("/api", router.transactionRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Application running at localhost:${port}`);
});

module.exports = app;
