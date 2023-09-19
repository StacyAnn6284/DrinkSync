import "./Header.css";
import logo from "../Header/images/syncLogo.png";

function Header() {
  return (
    <div className="Header">
      <div className="sitename">
        <img src={logo} alt="logo"></img>
        <h4>Drink Sync</h4>
      </div>
      <div>
        <h3>Saving on Cocktails, Not on Taste</h3>
      </div>
      <div></div>
      <p className="signin">Sign In</p>
    </div>
  );
}

export default Header;
