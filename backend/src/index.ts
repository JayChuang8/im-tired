import express from "express";

const port = 5000;

const app = express();

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${port}`);
});
