const express = require("express");
const PORT = process.env.PORT || 5000;
const app = express();
const exphbs = require("express-handlebars");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.engine("handlebars", exphbs({ defaultLayout: "default" }));
app.set("view engine", "handlebars");

require("./controllers/kds")(app);

app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);
