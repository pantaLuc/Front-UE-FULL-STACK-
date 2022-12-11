import React from 'react';
import { Link } from 'react-router-dom';

const Pagination = () => {
    return (
        <div className="py-6 bg-white center">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <nav className="relative flex justify-center -space-x-px rounded-md">
                <a href="#" title="" className="relative inline-flex items-center justify-center px-3 py-2 text-sm font-bold text-gray-400 bg-white border border-gray-200 w-9 rounded-l-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 focus:z-10">
                    <span className="sr-only"> Previous </span>
                    <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                    </svg>
                </a>

                <Link href="#" title="" className="relative inline-flex items-center justify-center px-4 py-2 text-sm font-bold text-gray-400 bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 focus:z-10 w-9"> 1 </Link>

                <a href="#" title="" aria-current="page" className="relative z-10 inline-flex items-center justify-center px-4 py-2 text-sm font-bold text-gray-900 bg-white border border-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 focus:z-10 w-9"> 2 </a>

                <a href="#" title="" className="relative inline-flex items-center justify-center px-4 py-2 text-sm font-bold text-gray-400 bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 focus:z-10 w-9"> 3 </a>

                <a href="#" title="" className="relative inline-flex items-center justify-center px-4 py-2 text-sm font-bold text-gray-400 bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 focus:z-10 w-9"> 4 </a>

                <a href="#" title="" className="relative inline-flex items-center justify-center px-4 py-2 text-sm font-bold text-gray-400 bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 focus:z-10 w-9"> 5 </a>

                <a href="#" title="" className="relative inline-flex items-center justify-center px-3 py-2 text-sm font-bold text-gray-400 bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 focus:z-10 w-9 rounded-r-md">
                    <span className="sr-only"> Next </span>
                    <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                </a>
            </nav>
        </div>
    </div>
    );
};

export default Pagination;