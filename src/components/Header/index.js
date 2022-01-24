import React from 'react';
import Nav from '../Nav';

function Header(props) {

    const {
        pages=[],
        setCurrentPage,
        currentPage
    } = props;

    return (
        <header className="flex-row px-1">
            <h1>
                <a href="/">Cameron Wein Portfolio</a>
                <Nav         
                pages={pages}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
                ></Nav>
            </h1>
        </header>
    )

}

export default Header;