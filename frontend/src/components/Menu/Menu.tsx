import { Link } from "react-router-dom";

export const Menu = () => {
  return (
    <div className="Menu">
      <ul>
        <li>
          <Link to="/substitutes">Find a Substitution</Link>
        </li>
      </ul>
    </div>
  );
};
