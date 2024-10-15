import React from 'react';
import './PageNumbers.css';

interface PageNumbersProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
}

const PageNumbers: React.FC<PageNumbersProps> = ({ currentPage, totalPages, onPageChange }) => {
  // Generate page numbers dynamically
  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => onPageChange(i)}
          className={i === currentPage ? 'active' : ''}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  return <div className="pagination">{renderPageNumbers()}</div>;
};

export default PageNumbers;
