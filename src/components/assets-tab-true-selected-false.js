import { useMemo } from "react";
import "./assets-tab-true-selected-false.css";

const AssetsTabTrueSelectedFalse = ({
  label,
  assetsTabTrueSelectedFalsFlex,
  labelFontSize,
  labelFontWeight,
}) => {
  const assetsTabTrueSelectedFalseStyle = useMemo(() => {
    return {
      flex: assetsTabTrueSelectedFalsFlex,
    };
  }, [assetsTabTrueSelectedFalsFlex]);

  const label2Style = useMemo(() => {
    return {
      fontSize: labelFontSize,
      fontWeight: labelFontWeight,
    };
  }, [labelFontSize, labelFontWeight]);

  return (
    <div
      className="assetstabtrueselectedfalse"
      style={assetsTabTrueSelectedFalseStyle}
    >
      <div className="label12">
        <div className="label13" style={label2Style}>
          {label}
        </div>
      </div>
      <div className="assetstabtrueselectedfalse-child" />
    </div>
  );
};

export default AssetsTabTrueSelectedFalse;
