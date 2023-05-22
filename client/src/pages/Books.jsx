import React, { useEffect, useState } from "react";
import axios from "axios";

export const Books = () => {
  const [bookData, setBookData] = useState([]);

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios.get("http://localhost:8800/books");
        setBookData(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAllBooks();
  }, []);

  return (
    <div>
      {bookData.map((book) => (
        <div key={book.id}>
          <h1>{book.title}</h1>
          <h3>{book.released_year}</h3>
        </div>
      ))}
    </div>
  );
};
