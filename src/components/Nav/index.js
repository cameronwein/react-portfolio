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
                <li className="link-item" key={page}>
                <span 
                    className={`section-link ${currentPage === page && `navActive`}`} 
                    onClick={() => {setCurrentPage(page);}}>{page}</span>
                </li>
            ))}
            </ul>
        </nav>
    )

}

export default Nav;