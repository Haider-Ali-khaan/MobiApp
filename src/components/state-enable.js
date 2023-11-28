import { useMemo } from "react";
import StateEnableCheck from "./state-enabled-check";
import "./small-screen-false-state-disa.css";

const StateEnable = ({
  label,
  showLabel,
  smallScreenFalseStateDisaPosition,
  smallScreenFalseStateDisaTop,
  smallScreenFalseStateDisaLeft,
  checkboxBackgroundColor,
  labelColor,
}) => {
  const smallScreenFalseStateDisaStyle = useMemo(() => {
    return {
      position: smallScreenFalseStateDisaPosition,
      top: smallScreenFalseStateDisaTop,
      left: smallScreenFalseStateDisaLeft,
    };
  }, [
    smallScreenFalseStateDisaPosition,
    smallScreenFalseStateDisaTop,
    smallScreenFalseStateDisaLeft,
  ]);

  const checkboxStyle = useMemo(() => {
    return {
      backgroundColor: checkboxBackgroundColor,
    };
  }, [checkboxBackgroundColor]);

  const labelStyle = useMemo(() => {
    return {
      color: labelColor,
    };
  }, [labelColor]);

  return (
    <div
      className="small-screenfalse-statedisa"
      style={smallScreenFalseStateDisaStyle}
    >
      <StateEnableCheck
        stateDisabledCheckCheckedPosition="relative"
        checkboxBackgroundColor="#bdc1cc"
      />
      {showLabel && (
        <div className="label9" style={labelStyle}>
          {label}
        </div>
      )}
    </div>
  );
};

export default StateEnable;
