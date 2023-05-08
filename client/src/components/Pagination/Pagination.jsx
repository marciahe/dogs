import style from "./Pagination.module.css";

const Pagination = ({
  totalDogs,
  dogsPerPage,
  setCurrentPage,
  currentPage,
}) => {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalDogs / dogsPerPage); i++) {
    pages.push(i);
  }
  return (
    <div>
      {pages.map((page, index) => {
        return (
          <button
            key={index}
            onClick={() => setCurrentPage(page)}
            className={page === currentPage ? style.active : style.inactives}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
