import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { BookContext } from "../../context";
export default function Details() {
  const { books } = useContext(BookContext);
  const { bookid } = useParams();
  const book = Object.values(books).find((e) => e.id === parseInt(bookid));
  const {
    id,
    title,
    authors,
    description,
    edition,
    num_pages,
    rating,
    genres,
    image_url,
  } = book;
  return (
    <div className="containe min-h-[95vh] w-full flex justify-center items-center py-[20px]">
      <img className="w-[300px] h-[450px]" src={image_url} alt="#" />

      <div className="w-[700px] m-[30px]">
        <h1 className=" font-semibold text-4xl m-[20px]">{title}</h1>
        <p className="m-[20px]">
          <span className=" font-semibold">authors :</span>
          {authors}
        </p>
        <p className="m-[20px]">
          <span className=" font-semibold">edition :</span>
          {edition}
        </p>
        <p className="m-[20px]">
          <span className=" font-semibold">number of pages :</span>
          {num_pages}
        </p>
        <p className="m-[20px]">
          <span className=" font-semibold">genres :</span>
          {genres}
        </p>
        <p className="m-[20px]">
          <span className=" font-semibold">rating :</span>
          {rating}
        </p>
        <p className="m-[20px]">
          <span className=" font-semibold">description :</span>
          {description}
        </p>
      </div>
    </div>
  );
}
