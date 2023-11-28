import { useMemo } from "react";
import "./small-screen-false2.css";

const SmallScreenFalse2 = ({
  textLabel,
  textLabel1,
  numericLabel,
  numericLabel1,
  numericLabel2,
  showAssetsHeaderCell,
  assetsHeaderCellVisible,
  assetsHeaderCellVisible1,
  assetsHeaderCellJustifyContent,
  numericLabelTextAlign,
}) => {
  const assetsHeaderCellStyle = useMemo(() => {
    return {
      justifyContent: assetsHeaderCellJustifyContent,
    };
  }, [assetsHeaderCellJustifyContent]);

  const numericLabelStyle = useMemo(() => {
    return {
      textAlign: numericLabelTextAlign,
    };
  }, [numericLabelTextAlign]);

  return (
    <div className="small-screenfalse">
      <div className="assetsheadercell">
        <div className="numeric-label">{textLabel}</div>
      </div>
      {showAssetsHeaderCell && (
        <div className="assetsheadercell1">
          <div className="numeric-label">{textLabel1}</div>
        </div>
      )}
      {assetsHeaderCellVisible && (
        <div className="assetsheadercell2" style={assetsHeaderCellStyle}>
          <div className="numeric-label" style={numericLabelStyle}>
            {numericLabel}
          </div>
        </div>
      )}
      {assetsHeaderCellVisible1 && (
        <div className="assetsheadercell2">
          <img
            className="caret-down-minor-icon1"
            alt=""
            src="/caretdown-minor1.svg"
          />
          <div className="numeric-label1">{numericLabel1}</div>
        </div>
      )}
      <div className="assetsheadercell4">
        <div className="numeric-label">{numericLabel2}</div>
      </div>
    </div>
  );
};

export default SmallScreenFalse2;
