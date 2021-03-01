import React from 'react';
import logo from './img/winclogo.png';

const Header = ({ pagename }) => {
    return (
        <div className="header">
            <img src={logo} width="150px" alt="Winc-logo" />
            <h1>Winc </h1>
            {!pagename && <h1>Student </h1>}
            <h1>DashBoard</h1>
            {pagename && <h1> van {pagename}</h1>}
        </div>
    )
};
export default Header;