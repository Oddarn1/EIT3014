import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header = () => {
    return (
        <React.Fragment>
            <div style={{height: "52px", backgroundColor: "#C6F5FF", display:"flex"}}>
                <Link to={"/"} style={{width:"fit-content"}}>
                    <div style={{padding: "13px 0px 10px 10px", width:"fit-content"}}>
                        <img src={logo} alt="TrondheimGuessr"/>
                    </div>
                </Link>
            </div>
        </React.Fragment>
    )
}

export default Header;