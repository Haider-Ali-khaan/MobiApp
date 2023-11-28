import { useMemo } from "react";
import "./assets-tab-true-default-false.css";

const AssetsTabTrueDefaultFalse = ({
  label,
  assetsTabTrueDefaultFalseFlex,
  labelFontSize,
  labelFontWeight,
}) => {
  const assetsTabTrueDefaultFalseStyle = useMemo(() => {
    return {
      flex: assetsTabTrueDefaultFalseFlex,
    };
  }, [assetsTabTrueDefaultFalseFlex]);

  const label1Style = useMemo(() => {
    return {
      fontSize: labelFontSize,
      fontWeight: labelFontWeight,
    };
  }, [labelFontSize, labelFontWeight]);

  return (
    <div
      className="assetstabtruedefaultfalse5"
      style={assetsTabTrueDefaultFalseStyle}
    >
      <div className="label11" style={label1Style}>
        {label}
      </div>
    </div>
  );
};

export default AssetsTabTrueDefaultFalse;
