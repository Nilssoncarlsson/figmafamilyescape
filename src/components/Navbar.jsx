import React from 'react';
import '/Users/lisanilssoncarlsson/figmafamilyescape/src/homepage.css';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">FamilyEscapes</div>
            <input type="text" placeholder="destination" className="search-bar" />
            <button className="guest-selector">gäster?</button>
            <button className="date-picker">datum?</button>
            <div className="profile-icon">👤</div>
        </div>
    );
}

export default Navbar;
