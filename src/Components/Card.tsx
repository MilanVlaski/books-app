import React, { ReactNode, useState } from "react";
import Modal from "./Modal";
import Book from "./types";

interface Props {
  book: Book[];
}

const Card = ({ book }: Props) => {
  const [show, setShow] = useState(false);
  const [bookItem, setItem] = useState<Book | undefined>();

  return (
    <>
      {book.map((item) => {
        const thumbnail = item.volumeInfo?.imageLinks?.thumbnail || "";
        const title = item.volumeInfo?.title || "Unknown Title";
        const author = item.volumeInfo?.authors?.[0] || "Unknown Author";
        return (
          <div
            className="card"
            onClick={() => {
              setShow(true), setItem(item);
            }}
          >
            <img src={thumbnail} alt="" />
            <div className="bottom">
              <h3 className="title">{title}</h3>
              <p>{author}</p>
            </div>
          </div>
        );
      })}
      <Modal show={show} item={bookItem} onClose={() => setShow(false)} />
    </>
  );
};

export default Card;
