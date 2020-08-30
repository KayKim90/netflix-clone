import React, { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [show, navbarBGShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        navbarBGShow(true);
      } else navbarBGShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);
  return (
    <div className={`navbar ${show && "navbar__bg"}`}>
      <img
        className="nav__logo"
        src={process.env.PUBLIC_URL + "/netflixlogo2.png"}
        alt="Netflix Logo"
      />
      <img
        className="nav__avatar"
        src={process.env.PUBLIC_URL + "/avatar.png"}
        alt="User Avatar"
      />
    </div>
  );
}
export default Navbar;
