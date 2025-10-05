import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { ChevronDown } from "lucide-react";
import { useLoaderData } from "react-router";
import { getStoreBook, getStoreWhishList } from "../../Utility/addToDB";
import { useEffect, useState } from "react";
import Book from "../Book/Book";

const ReadList = () => {

    const data =useLoaderData();
    const [readList, setReadList] = useState([]);
    const [wishList, setWishList] = useState([]);
   
    useEffect(()=>{
         const storeBookData = getStoreBook();
         const convtedBookData = storeBookData.map(id => parseInt(id))
         const myReadList = data.filter(book => convtedBookData.includes(book.bookId))
         setReadList(myReadList);

    },[]);
      useEffect(() => {
        const storeBookData = getStoreWhishList();
        const convtedBookData = storeBookData.map((id) => parseInt(id));
        const wishList = data.filter((book) =>convtedBookData.includes(book.bookId)
        );
        setWishList(wishList);
      }, []);
    
   
  return (
    <div>
      <div className="flex flex-col items-center">
        <h2 className="font-bold text-3xl p-4 ">Books</h2>
      <button className="btn bg-[#23BE0A] text-white m-4 w-fit">Sort By<ChevronDown/></button>
      </div>
      <div>
        <Tabs>
          <TabList>
            <Tab>Read Books</Tab>
            <Tab>Wishlist Books</Tab>
          </TabList>

          <TabPanel>
            
            {
                readList.map(b=> <Book key={b.bookId} singelBook={b} ></Book>)
            }
          </TabPanel>
          <TabPanel>
            {
                wishList.map(b=> <Book key={b.bookId} singelBook={b} ></Book>)
            }
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default ReadList;
