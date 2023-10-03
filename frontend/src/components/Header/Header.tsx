import "./Header.css";
import logo from "../Header/images/syncLogo.png";
import { Link } from "react-router-dom";
import NavBar from "../Navigation/NavBar";
import { useState } from "react";

function Header() {
  // const [user, setUser] = useState<any>(null);

  // interface NavBarProps {
  //   user?: any;
  // }
  return (
    <>
      {/* <NavBar user={user} /> */}
      <div className="Header">
        <div className="sitename">
          <div className="tagImage">
            <h4 className="headerText">Drink</h4>
            <img className="heroLogo" src={logo} alt="logo"></img>
            <h4 className="headerText"> Sync</h4>
          </div>
        </div>
        <div>
          <h3 className="tagLine">Saving on Cocktails, Not on Taste</h3>
        </div>
        <Link className="aboutRedirect" to="/about">
          Learn More About <span className="highlight">&nbsp;Drink Sync</span>!
        </Link>
        {/* {user ? (
          // Render content for authenticated users
          <p>Welcome, {user.username}!</p>
        ) : (
          // Render content for unauthenticated users
          <p>Not logged in. Please sign in.</p>
        )} */}
        <div></div>
      </div>
    </>
  );
}
export default Header;
