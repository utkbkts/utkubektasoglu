const PaginationItems = ({
  totalItems,
  itemsPerPage,
  currentPage,
  setCurrentPage,
}: {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  setCurrentPage: (pageNumber: number) => void;
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Handle previous page button
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Handle next page button
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Render page numbers
  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => setCurrentPage(i)}
          className={`px-3 py-1 mx-1 rounded-md ${
            i === currentPage ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  return (
    <div className="flex items-center justify-center mt-4 space-x-2">
      <button
        onClick={handlePrevPage}
        disabled={currentPage === 1}
        className="px-4 py-2 bg-gray-300 rounded-md disabled:opacity-50"
      >
        Prev
      </button>
      {renderPageNumbers()}
      <button
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
        className="px-4 py-2 bg-gray-300 rounded-md disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
};

export default PaginationItems;
