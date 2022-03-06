const express = require("express");
const app = express();
const db = require("./database");
// require("./models/accountmanager");
// require("./models/client");
const PORT = 5000;

db.connect((err) => {
  if (err) {
    console.error("error connecting: " + err);
    return;
  }
  console.log("Connection Successful !!");
});

app.use(express.json());
app.use(require("./routes/auth"));
app.use(require("./routes/request"));
app.use(require("./routes/designer"));
app.use(require("./routes/campaign"));
app.use(require("./routes/progress"));

app.get("/", (req, res) => {
  console.log("home");
  res.send("Hello World");
});

app.get("/about", (req, res) => {
  console.log("about");
  res.send("Hello Worldsss");
});

app.listen(PORT, () => {
  console.log("Listning at Port no.", PORT);
});
