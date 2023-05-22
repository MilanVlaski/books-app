import React, { ReactNode } from "react";

interface Props {
  book: Object[];
}

const Card = ({ book }: Props) => {
  return (
    <>
      {book.map((item) => {
        return (
          <div className="card">
            <img src="./images/testcover.jpg" alt="" />
            <div className="bottom">
              <h3 className="title">Test title</h3>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Card;
