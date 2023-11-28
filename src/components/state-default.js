import { useMemo } from "react";
import "./state-default.css";

const StateDefault = ({ stateDefaultBoxSizing }) => {
  const stateDefaultStyle = useMemo(() => {
    return {
      boxSizing: stateDefaultBoxSizing,
    };
  }, [stateDefaultBoxSizing]);

  return (
    <div className="statedefault" style={stateDefaultStyle}>
      <img className="plus-icon" alt="" src="/plus.svg" />
    </div>
  );
};

export default StateDefault;
