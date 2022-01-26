import React from 'react';
import Nav from '../Nav';

function Header(props) {

    const {
        pages=[],
        setCurrentPage,
        currentPage
    } = props;

    return (
        <>
            <header className="flex-row space-between align-items px-1">
                <h1>
                    <a href="/">Cameron Wein Portfolio</a>
                </h1>
                <Nav         
                    pages={pages}
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                ></Nav>
            </header>
            <section className="hero"></section>
        </>
    )

}

export default Header;