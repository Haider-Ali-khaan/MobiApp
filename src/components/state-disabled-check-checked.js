import { useMemo } from "react";
import "./state-disabled-check-checked.css";

const StateDisabledCheckChecked = ({
  stateDisabledCheckCheckedPosition,
  checkboxBackgroundColor,
}) => {
  const stateDisabledCheckCheckedStyle = useMemo(() => {
    return {
      position: stateDisabledCheckCheckedPosition,
    };
  }, [stateDisabledCheckCheckedPosition]);

  const checkboxStyle = useMemo(() => {
    return {
      backgroundColor: checkboxBackgroundColor,
    };
  }, [checkboxBackgroundColor]);

  return (
    <div
      className="statedisabled-checkchecked"
      style={stateDisabledCheckCheckedStyle}
    >
      <input type='checkbox' checked disabled className="checkbox" style={checkboxStyle} />
      
    </div>
  );
};

export default StateDisabledCheckChecked;
