const express = require("express");

const db = require("../department");
const app = express();
const PORT = 3000 || process.env.PORT;
app.use(express.json());



app.post("/add",db.createdepart)
app.post("/addemp",db.createemployes)





app.listen(PORT, () => console.log(`SERVER IS  RUNNING ${PORT}`));
