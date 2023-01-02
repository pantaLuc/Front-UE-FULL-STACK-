import React from 'react';

const Pagination = ({ currentPage, totalPages, handlePageChange }) => {
  return (
    <div className="flex justify-center m-8">
      <button
        className="px-2 py-1 text-sm font-bold leading-5 text-gray-700 transition duration-150 ease-in-out rounded-md hover:text-gray-500 focus:outline-none focus:text-gray-500"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
       précedent
      </button>
      <div className="inline-flex">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
          <button
            key={page}
            className={`px-2 py-1 text-sm font-bold leading-5 text-gray-700 transition duration-150 ease-in-out rounded-md hover:text-gray-500 focus:outline-none focus:text-gray-500 ${
              page === currentPage ? 'bg-gray-100 text-gray-800' : 'bg-transparent'
            }`}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </button>
        ))}
      </div>
      <button
        className="px-2 py-1 text-sm font-bold leading-5 text-gray-700 transition duration-150 ease-in-out rounded-md hover:text-gray-500 focus:outline-none focus:text-gray-500"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        suivant
      </button>
    </div>
  );
};

export default Pagination;
