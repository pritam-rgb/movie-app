import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <div className="main">
                <div className="search-bar">
                    <input />
                    <div id="search-btn">
                        <button>Search</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navbar;