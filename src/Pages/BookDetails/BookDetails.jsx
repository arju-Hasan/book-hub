import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoreDB, addToStoreWList } from "../../Utility/addToDB";

const BookDetails = () => {
    const {id} = useParams();
    const bookId = parseInt(id);
    const data =useLoaderData();
    const singelBook = data.find(book => book.bookId === bookId);
    const {bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing} = singelBook
   
    const handelMarksRead = id => {
      addToStoreDB(id)
    };
    
    const handelWhishList = id => {
        addToStoreWList(id)
    }

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 m-5 ">
        <div className="bg-[#F3F3F3] rounded-2xl px-4 ">
          <img
            className="w-120 rounded-2xl m-4 mx-auto"
            src={image}
            alt="Album"
          />
        </div>
        <div className=" m-4 ">
          <h2 className=" text-2xl m-2 ">{bookName}</h2>
          <p className="p-4"> By : {author}</p>
          <p className="border border-1 px-4 rounded-lg w-fit m-4">
            {category}
          </p>
          <p>
            <span className="font-bold">Review:</span> {review}
          </p>
          <div className="p-4">
            <span className="my-4 font-bold ">
              Tag:
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 mx-4 space-x-4 bg-yellow-100 text-green-500 rounded-md text-sm font-medium"
                >
                  # {tag}
                </span>
              ))}
            </span>
            <ul className="mt-4">
              <li>
                <p className="mt-2 ">Number of Pages:{totalPages} </p>
                <p className="mt-2 ">Publisher: {publisher}</p>
                <p className="mt-2 ">Year of Publishing:{yearOfPublishing} </p>
                <p className="m-2 ">Rating:{rating} </p>
              </li>
            </ul>
            <div className="flex items-center justify-self-start gap-4">
              <button onClick={()=> handelMarksRead(id)} className="btn ">Read</button>
              <button onClick={()=> handelWhishList(id)} className="btn bg-[#50B1C9]">Wishlist</button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default BookDetails;
