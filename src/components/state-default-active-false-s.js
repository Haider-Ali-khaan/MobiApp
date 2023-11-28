import "./state-default-active-false-s.css";
import { Link } from "react-router-dom/dist";
const StateDefaultActiveFalseS = ({ label,path }) => {
  return (
    <div className="statedefault-activefalse-s">
      <Link to={path} className="label20">{label}</Link>
    </div>
  );
};

export default StateDefaultActiveFalseS;
