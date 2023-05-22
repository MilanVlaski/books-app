import React from "react";
import Card from "./Card";

const Main = () => {
  return (
    <>
      <div className="header">
        <div className="row1">
          <h1>I know that I know nothing.</h1>
        </div>
        <div className="row2">
          <h2>Search for books</h2>
          <div className="search">
            <input type="text" placeholder="Enter your book or author name" />
            <button>
              <i className="fas fa-search"></i>
            </button>
          </div>
          <img src="./images/bg2.jpg" alt="" />
        </div>
      </div>
      <div className="container">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
};

export default Main;
