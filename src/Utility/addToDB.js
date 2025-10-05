const getStoreBook = () => {

    const storeBookSTR = localStorage.getItem("readList");

    if(storeBookSTR){
        const storeBookData = JSON.parse(storeBookSTR);
        return storeBookData;
    }
    else{
        return [];
    }
}
const addToStoreDB = (id) => {

    const storeBookData = getStoreBook();

    if(storeBookData.includes(id)){

        alert("this book already readList");        
    }
    else{
        storeBookData.push(id);
        const data =JSON.stringify(storeBookData);
            localStorage.setItem("readList", data)        
    }
};

export { addToStoreDB, getStoreBook };



const getStoreWhishList = () => {
  const storeWListSTR = localStorage.getItem("whishlist");

  if (storeWListSTR) {
    const storeWListData = JSON.parse(storeWListSTR);
    return storeWListData;
  } else {
    return [];
  }
};
const addToStoreWList = (id) => {
  const storeWListData = getStoreWhishList();

  if (storeWListData.includes(id)) {
    alert("this book already whishlist");
  } else {
    storeWListData.push(id);
    const data = JSON.stringify(storeWListData);
    localStorage.setItem("whishlist", data);
  }
};
export { addToStoreWList, getStoreWhishList };
