import { Suspense, useEffect, useState } from "react";
import Book from "../Book/Book";



const Books = ({data}) => {
//     const [allBook, setAllBook] = useState([]);
// 
// useEffect(()=>{
//     fetch('booksData.json')
//     .then(res=> res.json())
//     .then(data => {
//         setAllBook(data);
//     });
//         
// 
// },[]);
    return (
      <div>
        <h3 className="text-2xl text-center font-bold m-4 p-4">Books</h3>
        <Suspense fallback={<span>loading..........</span>}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.map((singelBook) => (
              <Book singelBook={singelBook} key={singelBook.bookId}></Book>
            ))}
          </div>
        </Suspense>
      </div>
    );
};

export default Books;