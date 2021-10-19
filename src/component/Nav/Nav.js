import React, { useEffect, useState } from "react";
import { BiBell, BiCaretDown, BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";
import "../Nav/Nav.css";

import logo from "../../img/logo.png";
function Nav() {
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  console.log('showNav' , showNav)

  return (
    <div className={`navbar ${showNav && "nav_black"}`}>
      <nav>
        <ul className="left-nav">
          <img className="logo" src={logo} alt="logo" />

          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/tv-shows">Tv Shows</Link>
          </li>
          <li>
            <Link to="/movies">Movies</Link>
          </li>
          <li>
            <Link to="/new-and-popular">New & Popular</Link>
          </li>
          <li>
            <Link to="/my-list">My List</Link>
          </li>
          <li>
            <Link to="/whatch-again">Whatch Again</Link>
          </li>
        </ul>
      </nav>

      <nav>
        <ul className="right-nav">
          <li>
            <span>
              <BiSearch size="1.5em" />
            </span>
          </li>
          <li>
            <span>Kids</span>
          </li>
          <li>
            <span>
              <BiBell size="1.5em" />
            </span>
          </li>
          <li>
        
            <div className="profil">
            <img
              className="avatar"
              src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png
"
              alt="avatar"
            />
              <BiCaretDown className="dropDownIcon"/>
              <div className="options">
                <span>Settings</span>
                <span>Logout</span>
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
