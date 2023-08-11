"use client"
import React, { useEffect, useState } from "react";
import { GET } from "./api/book/route"; // Adjust the import path

function MyComponent() {
  const [bookData, setBookData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await GET(); // Use the GET function directly
        setBookData(data);
      } catch (error) {
        console.error("Error fetching book data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      {bookData ? (
        <ul>
          {bookData.map((book: { id: React.Key | null | undefined; title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; author: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; }) => (
            <li key={book.id}>
              <p>Title: {book.title}</p>
              <p>Author: {book.author}</p>
              {/* Add other book properties as needed */}
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading book data...</p>
      )}
    </div>
  );
}

export default MyComponent;
