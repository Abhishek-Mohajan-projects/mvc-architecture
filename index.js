const express = require("express");
const bodyParser = require("body-parser");
const UserRouter = require("./routes/users.router");
const cors = require("cors");
const productRouter = require("./routes/products.route");
const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(UserRouter);
app.use(productRouter);

app.use((req, res, next) => {
  res.status(404).json({
    message: "404 not found",
  });
  next();
});

app.listen(PORT, () => {
  console.log(`server running at http://localhost:${PORT}`);
});
