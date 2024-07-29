import React, { useContext } from "react";
import "./home.css";
import { Link } from "react-router-dom";
import bg1 from "../../assets/1.png";
import { CiSearch } from "react-icons/ci";
import { BookContext } from "../../context";
import BookCard from "../../components/bookCard/BookCard";

export default function Home() {
  const { books, setKey } = useContext(BookContext);
  return (
    <div className="home min-h-[100vh] w-full">
      <div className="h-[75vh] w-full relative">
        <img src={bg1} alt="" className="h-full w-full absolute top-0 left-0" />
        <div className="comtaine  flex items-center justify-center flex-col relative h-full w-full bg-[rgba(0,0,0,0.6)]">
          <h1 className="text-[#EEB63D] text-[70px] text-center font-semibold m-[10px]">
            find <span className="text-white">your</span> book
          </h1>
          <p className="text-white w-[800px] text-center m-[10px]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis,
            at, voluptates tempora reprehenderit, sunt aspernatur quas minus
            explicabo ex saepe beatae dolores eos! Voluptatibus molestiae ullam
            quo. Aspernatur, sunt natus!
          </p>
          <div className="search p-[10px] bg-white w-[600px] h-[50px] rounded-[20px] flex justify-center items-center m-[20px]">
            <CiSearch className="text-[30px] mr-[15px]" />
            <input
              onChange={(e) => setKey(e.target.value)}
              className="bg-white w-full h-full p-[5px] border-none ml-[15px]"
              type="text"
              placeholder="Tap to search ..."
            />
          </div>
        </div>
      </div>
      <div className="containe grid justify-center items-center grid-cols-[repeat(auto-fit,minmax(200px,250px))] gap-[30px] m-[25px]">
        {Object.entries(books).map(([key, book]) => (
          <Link to={`/MSLbooks/details/${book.id}`}>
            <BookCard key={key} data={book} />
          </Link>
        ))}
      </div>
    </div>
  );
}
