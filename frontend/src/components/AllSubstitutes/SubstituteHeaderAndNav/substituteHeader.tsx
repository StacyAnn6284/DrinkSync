import logo from "../../Header/images/syncLogo.png";
import { Link } from "react-router-dom";
import "./substituteHeader.css";

function SubstituteHeader() {
  return (
    <div className="substituteHeader">
      <div className="substituteSitename">
        <img className="martiniSync" src={logo} alt="logo"></img>
        <h4 className="drink-sync">Drink Sync</h4>
      </div>
      <div></div>
      <div></div>
      <p className="substituteSignin">
        <Link to="/login" rel="noopener noreferrer">
          Sign In
        </Link>
      </p>
    </div>
  );
}
export default SubstituteHeader;
