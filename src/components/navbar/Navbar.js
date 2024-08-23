import React from "react";
import "./_navbar.scss";
import { Button } from "@carbon/react";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-div">
        <div className="navbar-div-div1">
          <a href="/">
            <img
              src="./images/perfios-preview.png"
              alt=""
              className="navbar-div-div1-img"
            />
          </a>
        </div>
        <div className="navbar-div-div2">
          <Button kind="ghost" href="/request">
            View Past Request
          </Button>
          <Button kind="danger" href="/dparwebform">
            Make a Privacy Request
          </Button>
          <Button kind="ghost" href="/preference-login">
            Preference
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
