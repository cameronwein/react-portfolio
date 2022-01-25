import React, { useEffect } from 'react';

function Nav(props) {

    const {
        pages=[],
        setCurrentPage,
        currentPage
    } = props;

    useEffect(() => {
        document.title = currentPage;
        }, [currentPage]);

    return (
        <nav>
            <ul className="flex-row">
            {pages.map((page) => (
                <li
                className={`mx-1 ${
                    currentPage === page && `navActive`
                    }`}
                key={page}
                >
                <span onClick={() => {setCurrentPage(page);}}>{page}</span>
                </li>
            ))}
            </ul>
        </nav>
    )

}

export default Nav;