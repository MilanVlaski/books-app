import axios from "axios";
import React, { ReactNode, useState } from "react";
import { API_KEY } from "./Main";
import Modal from "./Modal";
import Book from "./types";

interface Props {
  book: Book[];
}

const Card = ({ book }: Props) => {
  const [show, setShow] = useState(false);
  const [bookItem, setItem] = useState<Book | undefined>();
  const [bookData, setBookData] = useState([]);

  const searchByCategory = (item: Book) => {
    const category = item?.volumeInfo?.categories?.[0];
    let query: string =
      "https://www.googleapis.com/books/v1/volumes?q=" +
      "+subject:" +
      category +
      "&key=" +
      API_KEY +
      "&maxResults=10";
    axios
      .get(query)
      .then((res) => setBookData(res.data.items))
      .catch((err) => console.log(err));
  };

  const handleCLick = (item: Book) => {
    searchByCategory(item);
    setItem(item);
    setShow(true);
  };

  return (
    <>
      {book.map((item, index) => {
        const id = item?.volumeInfo.id;
        const thumbnail = item.volumeInfo?.imageLinks?.thumbnail || "";
        const title = item.volumeInfo?.title || "Unknown Title";
        const author = item.volumeInfo?.authors?.[0] || "Unknown Author";
        return (
          <div className="card" key={index} onClick={() => handleCLick(item)}>
            <img src={thumbnail} alt="" />
            <div className="bottom">
              <h3 className="title">{title}</h3>
              <p>{author}</p>
            </div>
          </div>
        );
      })}
      {show && (
        <Modal
          relatedBooks={bookData}
          show={show}
          item={bookItem}
          onClose={() => setShow(false)}
        />
      )}
    </>
  );
};

export default Card;
