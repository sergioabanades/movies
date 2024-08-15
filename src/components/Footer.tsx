import React from 'react';
import './styles/Footer.scss'; 

interface FooterProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Footer: React.FC<FooterProps> = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <footer className="footer">
      <div className="pagination">
        <button 
          className="pagination-button"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Anterior
        </button>
        <span className="pagination-info">Página {currentPage} de {totalPages}</span>
        <button 
          className="pagination-button"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Siguiente
        </button>
      </div>
    </footer>
  );
};

export default Footer;
