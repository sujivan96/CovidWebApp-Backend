const express = require("express");
const cors = require("cors");
const Covid = require("./config");
const app = express();
app.use(express.json());
app.use(cors());



app.post("/create", async (req, res) => {
  const data = req.body;
  await Covid.add({ data });
  res.send({ msg: "User Added" });
});




app.listen(4000, () => console.log("Running port 4000"));
