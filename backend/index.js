import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "etaKsirhC!48#",
  database: "book_shop",
});

// Can't send to express server by default, to prevent we add this
app.use(express.json());
app.use(cors());

app.get("/books", (req, res) => {
  const q = "SELECT * FROM book_shop.books";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.post("/add", (req, res) => {
  const q =
    "INSERT INTO book_shop.books (`title`, `author_fname`, `author_lname`, `released_year`, `stock_quantity`, `pages`) VALUES (?)";
  const values = [
    req.body.title,
    req.body.author_fname,
    req.body.author_lname,
    req.body.released_year,
    req.body.stock_quantity,
    req.body.pages,
  ];

  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

// Test
app.listen(8800, () => {
  console.log("connected to backend!");
});
