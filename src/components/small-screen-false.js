import { useMemo } from "react";
import "./small-screen-false.css";

const SmallScreenFalse = ({
  label,
  label1,
  label2,
  label3,
  label4,
  showLabel,
  labelVisible,
  labelVisible1,
  smallScreenFalseBoxShadow,
  labelTextAlign,
}) => {
  const smallScreenFalseStyle = useMemo(() => {
    return {
      boxShadow: smallScreenFalseBoxShadow,
    };
  }, [smallScreenFalseBoxShadow]);

  const label3Style = useMemo(() => {
    return {
      textAlign: labelTextAlign,
    };
  }, [labelTextAlign]);

  return (
    <div className="small-screenfalse2" style={smallScreenFalseStyle}>
      <div className="label58">{label}</div>
      {showLabel && <div className="label59">{label1}</div>}
      {labelVisible && (
        <div className="label60" style={label3Style}>
          {label2}
        </div>
      )}
      {labelVisible1 && <div className="label60">{label3}</div>}
      <div className="label62">{label4}</div>
    </div>
  );
};

export default SmallScreenFalse;
