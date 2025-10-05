import React, { use } from 'react';
import { Star } from "lucide-react";
import { Link } from 'react-router';

const Book = ({singelBook}) => {
   const {
     bookName,
     bookId,
     image,
     publisher,
     rating,
     category,
     tags,
     author,
   } = singelBook;
    return (
      <Link to={`/bookDetails/${bookId}`}>
        <div className="card border border-2-[#F3F3F3] rounded-2xl">
          <div className="m-5 bg-[#F3F3F3] overflow-hidden rounded-2xl">
            <img
              className="h-80 w-60 m-4 mx-auto rounded-2xl"
              src={image}
              alt="Book"
            />
          </div>

          <div className="card-body">
            <h2 className="card-title flex gap-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-200 text-black rounded-md text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </h2>

            <h3 className="text-2xl">{bookName}</h3>
            <p>{author}</p>
            <h2>{category}</h2>

            <div className="card-actions border-t-2 pt-3 border-dashed border-[#f3f3f3] justify-between">
              <div className="badge badge-outline">{publisher}</div>
              <div className="badge badge-outline">
                {rating}
                <Star />
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
};

export default Book;