import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const BookContext = createContext();

export const BookContextProvider = (props) => {
  const booksUrl = "https://example-data.draftbit.com/books?_limit=100&q=";

  const [key, setKey] = useState("");
  const getData = async (key) => {
    try {
      const response = await axios.get(`${booksUrl}${key}`);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const initialData = await getData(key);
        setBooks(initialData);
      } catch (error) {}
    };

    fetchData();
  }, [key]);

  return (
    <BookContext.Provider value={{ books, setKey }}>
      {props.children}
    </BookContext.Provider>
  );
};
