const Pagination = (props) => {
  const {
    postsPerPage,
    totalPosts,
    currentPage,
    paginate,
    nextPage,
    prevPage,
  } = props;

  const pageNumbers = [];
  const variableDeterminant = 2;

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li
            className={currentPage === 1 ? "page-item hide" : "page-item"}
          >
            <a
              className="page-link"
              href="#"
              tabIndex="-1"
              onClick={() => prevPage()}
            >
              <span aria-hidden="true">
                <svg
                  width="13"
                  height="16"
                  viewBox="0 0 13 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M11 2L3 10L11 18" stroke="black" strokeWidth="3" />
                </svg>
              </span>
            </a>
          </li>

          {pageNumbers.map((num, index) => (
            <li className="page-item" key={index}>
              <a
                className={
                  num === currentPage ? "page-link active" : "page-link"
                }
                href="#"
                onClick={() => paginate(num)}
              >
                {num}
              </a>
            </li>
          ))}

          <li
            className={
              currentPage === pageNumbers.length
                ? "page-item hide"
                : "page-item"
            }
          >
            <a className="page-link" href="#" onClick={() => nextPage()}>
              {" "}
              <span aria-hidden="true">
                <svg
                  width="13"
                  height="16"
                  viewBox="0 0 13 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 2L10 10L2 18" stroke="black" strokeWidth="3" />
                </svg>
              </span>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Pagination;
