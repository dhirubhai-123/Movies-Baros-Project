import React, { useEffect } from 'react';
import { ArrowUp01, ArrowDown01 } from "lucide-react";
import { useAuthStore } from '../Store/useAuthStore';

const FilterModalForSearchBar = ({ click }) => {

    const { setSortFilter, sortFilter } = useAuthStore();

    // useEffect(() => {
    //     console.log(click, filterClicked)
    // }, [])

    const { filterClicked, updateFilterClicked } = click;

    return (
        <div
            data-dialog-backdrop="web-3-modal"
            data-dialog-backdrop-close="true"
            className="inset-0 z-[999] grid h-full w-full place-items-center bg-black bg-opacity-60 backdrop-blur-sm transition-opacity duration-300"
        >
            <div
                className="relative m-4 rounded-lg bg-white shadow-sm"
                data-dialog="web-3-modal"
            >
                <div className="flex items-start justify-between p-4">
                    <div>
                        <h5 className="text-xl font-medium text-slate-800">
                            Sort Content
                        </h5>
                        <p className="text-slate-500 text-sm font-light">
                            Choose the way of sorting content
                        </p>
                    </div>
                    <button
                        data-ripple-dark="true"
                        data-dialog-close="true"
                        className="relative h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-blue-gray-500 transition-all hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                    >
                        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform"
                            onClick={() => updateFilterClicked(!filterClicked)}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                                className="h-5 w-5"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                ></path>
                            </svg>
                        </span>
                    </button>
                </div>
                <div className="relative px-4">
                    <div className="mb-6">

                        <button className="w-full mt-3 rounded-md flex items-center justify-center border border-slate-300 py-2 px-4 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button"
                            onClick={() => setSortFilter("asc")}
                        >

                            <ArrowDown01 className='mx-2 size-5' />
                            Ascending Order
                        </button>

                        <button className="w-full mt-2 rounded-md flex items-center justify-center border border-slate-300 py-2 px-4 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="button"
                            onClick={() => setSortFilter("desc")}
                        >
                            <ArrowUp01 className='mx-2 size-5' />
                            Descending Order
                        </button>
                    </div>

                </div>

            </div>
        </div>

    )
}

export default FilterModalForSearchBar