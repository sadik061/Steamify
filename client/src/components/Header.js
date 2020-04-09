import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link to="/" className="item" > Streamy</Link>
            <div className="right menu">
                <Link to="/" className="item" > All Streams</Link>
                <Link to="/streams/create" className="item" > Create</Link>
                <Link to="/streams/delete" className="item" > Delete</Link>
                <Link to="/streams/edit" className="item" > Edit</Link>
                <Link to="/streams/show" className="item" > Show</Link>

            </div>
        </div>
    );
}

export default Header;