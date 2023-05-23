import React, { ReactNode, useState } from "react";
import Card from "./Card";
import Book from "./types";

interface Props {
  show: boolean;
  item?: Book;
  onClose: () => void;
  relatedBooks: Book[];
}

const Modal = ({ show, item, onClose, relatedBooks }: Props) => {
  if (!show) return null;
  const id = item?.volumeInfo.id;
  const thumbnail = item?.volumeInfo?.imageLinks?.thumbnail || "";
  const title = item?.volumeInfo?.title || "Unknown Title";
  const authors = item?.volumeInfo?.authors;
  const description = item?.volumeInfo.description;
  const publisher = item?.volumeInfo.publisher;
  const publishedDate = item?.volumeInfo.publishedDate;
  const previewLink = item?.volumeInfo.previewLink;
  return (
    <>
      <div className="overlay">
        <div className="overlay-inner">
          <div className="related-books">
            <h2>Similar books</h2>
            {relatedBooks && <Card book={relatedBooks} />}
          </div>
          <button className="close" onClick={onClose}></button>
          <div className="inner-box">
            <img src={thumbnail} alt="" />
            <div className="info">
              <h1>{title}</h1>
              <div className="authors">
                {authors?.map((item, index) => (
                  <h3 key={index}>{item}</h3>
                ))}
              </div>
              <br />
              <h4>
                {publisher} <span>{publishedDate}</span>
                <br />
                <a href={previewLink}>
                  <button>More</button>
                </a>
              </h4>
            </div>
          </div>
          <h4 className="description">{description}</h4>
        </div>
      </div>
    </>
  );
};

export default Modal;
