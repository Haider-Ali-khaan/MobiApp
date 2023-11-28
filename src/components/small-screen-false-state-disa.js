import { useMemo } from "react";
import StateDisabledCheckChecked from "./state-disabled-check-checked";
import "./small-screen-false-state-disa.css";

const SmallScreenFalseStateDisa = ({
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
      <StateDisabledCheckChecked
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

export default SmallScreenFalseStateDisa;
