import React from 'react';
import {Link} from 'react-router-dom';
import GoogleAUth from './GoogleAuth';

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link to="/" className="item" > Streamy</Link>
            <div className="right menu">
                <Link to="/" className="item" > All Streams</Link>
                <Link to="/streams/create" className="item" > Create</Link>
                <Link to="/streams/delete" className="item" > Delete</Link>
                <Link to="/streams/edit" className="item" > Edit</Link>
                <Link to="/streams/" className="item" > Show</Link>
                <GoogleAUth />

            </div>
        </div>
    );
}

export default Header;