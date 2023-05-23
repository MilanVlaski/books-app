import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";

const Main = () => {
  const [search, setSearch] = useState("");
  const [bookData, setBookData] = useState([]);

  const searchBook = (byAuthor: boolean) => {
    if (search.length > 0) {
      let query: string =
        "https://www.googleapis.com/books/v1/volumes?q=" +
        (byAuthor ? "+inauthor:" : "") +
        search +
        "&key=AIzaSyBYS7T8pJIg0UiL0dr9pKmgkUeTnqVgjIA" +
        "&maxResults=40";
      axios
        .get(query)
        .then((res) => setBookData(res.data.items))
        .catch((err) => console.log(err));
    }
  };

  const handleSearchByTitle = () => {
    searchBook(false);
  };

  const handleSearchByAuthor = () => {
    searchBook(true);
  };

  const handleEnter = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") searchBook(false);
  };

  return (
    <>
      <div className="header">
        <div className="row1">
          <h1>
            A reader lives a thousand lives
            <br />
            before he dies.
          </h1>
        </div>
        <div className="row2">
          <h2>Search for books</h2>
          <div className="search">
            <input
              type="text"
              placeholder="Enter name of book or author"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => handleEnter(e)}
            />
          </div>
          <div className="searchBtns">
            <button onClick={handleSearchByTitle}>Search by title</button>
            <button onClick={handleSearchByAuthor}>Search by author</button>
          </div>
          <img className="img1" src="./images/bg2.jpg" alt="" />
          <img className="img2" src="./images/bg4.jpg" alt="" />
        </div>
      </div>
      <div className="container">
        {bookData && bookData.length > 0 && <Card book={bookData} />}
      </div>
    </>
  );
};

export default Main;
