import React from 'react';

const RecomendedCard = ({ imgUrl, name, rating, length, verdict, onClick }) => {
    return (
        <div className="relative flex flex-col hover:scale-105 hover:z-30 hover:border hover:border-black justify-between bg-cover text-gray-800 overflow-hidden cursor-pointer w-full rounded-lg shadow-md h-64 my-1"
            style={{ backgroundImage: `url(${imgUrl})` }} onClick={onClick}>
            <div className="absolute bg-gradient-to-t from-green-400 to-blue-400 opacity-50 inset-0 z-0"></div>
            <div className="relative flex flex-row items-end h-full w-full">
                <div className="absolute right-0 top-0 m-2">
                    <svg xmlns="http://www.w3.org/2000/svg"
                        className="h-9 w-9 p-2 text-gray-200 hover:text-blue-400 rounded-full hover:bg-white transition ease-in duration-200"
                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"></path>
                    </svg>
                </div>
                <div className="p-6 rounded-lg flex flex-col w-full z-10">
                    <h4 className="mt-1 text-white text-xl font-semibold leading-tight truncate">{name}</h4>
                    <div className="flex justify-between items-center">
                        <div className="flex flex-col">
                            <h2 className="text-sm flex items-center text-gray-300 font-normal">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                </svg>
                                {verdict}
                            </h2>
                        </div>
                    </div>
                    <div className="flex pt-4 text-sm text-gray-300">
                        <div className="flex items-center mr-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500 mr-1" viewBox="0 0 20 20" fill="currentColor">
                                <path
                                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z">
                                </path>
                            </svg>
                            <p className="font-normal">{rating}</p>
                        </div>
                        <div className="flex items-center font-medium text-white">
                            {length}
                            <span className="text-gray-300 text-sm font-normal">&nbsp;mins</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecomendedCard;
