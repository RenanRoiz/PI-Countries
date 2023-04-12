import style from "./Paginado.module.css"

const Paged = ({ currentPage, totalPages, onPageChange }) => {
    const handlePrevClick = () => {
      if (currentPage > 1) {
        onPageChange(currentPage - 1);
      }
    };
  
    const handleNextClick = () => {
      if (currentPage < totalPages) {
        onPageChange(currentPage + 1);
      }
    };
  
    return (
      <div className={style.paginado}>
        <button onClick={handlePrevClick}>Prev</button>
        <span>{currentPage}</span>
        <button onClick={handleNextClick}>Next</button>
      </div>
    );
  };
  
export default Paged;