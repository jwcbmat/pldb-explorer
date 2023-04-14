const express = require("express");
const app = express();
const cors = require("cors");
const routes = require("./routes.js");

app.use(cors());
app.use(routes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
