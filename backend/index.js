const express = require("express");
const mongoDB = require("./db");
const cors = require('cors');

const app = express();
const port = 5000;

app.get("/", (req, res) => {
    res.send("Hello World!");
  });

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin,X-Requested-With,Content-Type,Accept"
    );
    next();
  });

  app.use(cors({
    origin: 'http://localhost:3000',  // Allow requests from this origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow these HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'] // Allow these headers
  }));

app.use(express.json());

app.use("/api",require("./routes/CreateList"));
app.use("/api",require("./routes/GetList"));
app.use("/api",require("./routes/Update"));
app.use("/api",require("./routes/Delete"));
app.use("/api",require("./routes/Description"));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

mongoDB();
