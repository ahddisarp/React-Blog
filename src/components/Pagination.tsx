// src/components/Pagination.tsx
import React from "react";

interface PaginationProps {
    currentPage: number;
    lastPage: number;
    onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
    currentPage,
    lastPage,
    onPageChange,
}) => {
    return (
        <div className="pagination">
            {/* Previous Button - Disable if on the first page */}
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
            >
                Previous
            </button>

            {/* Page Numbers */}
            <span>
                Page {currentPage} of {lastPage}
            </span>

            {/* Next Button - Disable if on the last page */}
            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === lastPage}
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;
