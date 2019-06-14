import React from "react";

function Header() {
    return(
        <div className="ui message">
            <div className="header">
                about
            </div>
            <p>This is a simple application to help you levelup on React Hooks. There is no data persistence as this will be available in the next tutorial.</p>
            <p>Below are links to the developers LinkedIn and Github accounts respectively</p>
            <a href="url">
                <button className="ui linkedin button">
                    <i aria-hidden="true" className="linkedin icon"/>Linkedin
                </button>
            </a>
            <a href="url">
                <button className="ui github button">
                    <i aria-hidden="true" className="github icon"/>Github
                </button>
            </a>
        </div>
    )
}
export default Header;