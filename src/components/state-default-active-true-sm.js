import "./state-default-active-true-sm.css";
import { Link } from "react-router-dom/dist";
const StateDefaultActiveTrueSm = ({ label, showCaretDownMinorIcon, path }) => {
  return (
    <div className="statedefault-activetrue-sm">
      <Link to={path} className="label21">{label}</Link>
      {showCaretDownMinorIcon && (
        <img
          className="caret-down-minor-icon"
          alt=""
          src="/caretdown-minor.svg"
        />
      )}
    </div>
  );
};

export default StateDefaultActiveTrueSm;
