import React, { ReactNode } from "react";

interface Book {
  volumeInfo: {
    title?: string;
    authors?: string[];
    imageLinks: {
      smallThumbnail: string;
    };
  };
}

interface Props {
  book: Book[];
}

const Card = ({ book }: Props) => {
  return (
    <>
      {book.map((item) => {
        const thumbnail = item.volumeInfo?.imageLinks?.smallThumbnail || "";
        const title = item.volumeInfo?.title || "Unknown Title";
        const author = item.volumeInfo?.authors?.[0] || "Unknown Author";
        return (
          <div className="card">
            <img src={thumbnail} alt="" />
            <div className="bottom">
              <h3 className="title">{title}</h3>
              <p>{author}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Card;
