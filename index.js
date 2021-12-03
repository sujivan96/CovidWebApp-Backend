const PORT = process.env.PORT || 4000
const express = require("express");
const cors = require("cors");
const Covid = require("./config");
const app = express();
app.use(express.json());
app.use(cors());



app.post("/create", async (req, res) => {
  const data = req.body;
  await Covid.add({ data });
  res.send({ msg: "Data inserted" });
});




app.listen(PORT, () => console.log("Running port "));
