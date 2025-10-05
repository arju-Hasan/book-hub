import React from 'react';
import BannerImg from '../../assets/Banner.png'

const Banner = () => {
    return (
      <div className="flex flex-col md:flex-row justify-around items-center bg-[#F3F3F3] m-2 gap-4 p-4 rounded-2xl">
        <div>
          <h2 className="text-4xl text-black">
            Arju to freshen up <br /> your bookshelf
          </h2>
          <button className="btn rounded-md m-4 font-bold text-white bg-green-600">
            View The List
          </button>
        </div>
        <div>
          <img src={BannerImg} alt="books image" />
        </div>
      </div>
    );
};

export default Banner;
