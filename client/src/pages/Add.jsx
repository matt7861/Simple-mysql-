import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Add = () => {
  const [book, setBook] = useState({
    title: "",
    author_fname: "",
    author_lname: "",
    released_year: null,
    stock_quantity: null,
    pages: null,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8800/add", book);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form">
      <h1>Add New Book</h1>
      <input
        type="text"
        placeholder="title"
        onChange={handleChange}
        name="title"
      />
      <input
        type="text"
        placeholder="author_fname"
        onChange={handleChange}
        name="author_fname"
      />
      <input
        type="text"
        placeholder="author_lname"
        onChange={handleChange}
        name="author_lname"
      />
      <input
        type="number"
        placeholder="released_year"
        onChange={handleChange}
        name="released_year"
      />
      <input
        type="number"
        placeholder="stock_quantity"
        onChange={handleChange}
        name="stock_quantity"
      />
      <input
        type="number"
        placeholder="pages"
        onChange={handleChange}
        name="pages"
      />
      <button className="formButton" onClick={handleClick}>
        Add
      </button>
    </div>
  );
};
