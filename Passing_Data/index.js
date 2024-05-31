import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  console.log(res.statusCode);
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  const numOfLetters=req.body["fName"].length + req.body["lName"].length;
  res.render("index.ejs", {numberOfLetters: numOfLetters});
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
