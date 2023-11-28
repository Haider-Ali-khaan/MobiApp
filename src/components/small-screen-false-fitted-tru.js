import { useMemo } from "react";
import AssetsTabTrueSelectedFalse from "./assets-tab-true-selected-false";
import AssetsTabTrueDefaultFalse from "./assets-tab-true-default-false";
import "./small-screen-false-fitted-tru.css";

const SmallScreenFalseFittedTru = ({
  label,
  label1,
  label2,
  assetsTabTrueDefaultFalse,
  smallScreenFalseFittedTruWidth,
  smallScreenFalseFittedTruPosition,
  smallScreenFalseFittedTruTop,
  smallScreenFalseFittedTruLeft,
}) => {
  const smallScreenFalseFittedTruStyle = useMemo(() => {
    return {
      width: smallScreenFalseFittedTruWidth,
      position: smallScreenFalseFittedTruPosition,
      top: smallScreenFalseFittedTruTop,
      left: smallScreenFalseFittedTruLeft,
    };
  }, [
    smallScreenFalseFittedTruWidth,
    smallScreenFalseFittedTruPosition,
    smallScreenFalseFittedTruTop,
    smallScreenFalseFittedTruLeft,
  ]);

  return (
    <div
      className="small-screenfalse-fittedtru"
      style={smallScreenFalseFittedTruStyle}
    >
      <AssetsTabTrueSelectedFalse
        label="Block"
        assetsTabTrueSelectedFalsFlex="1"
        labelFontSize="14px"
        labelFontWeight="unset"
      />
      <AssetsTabTrueDefaultFalse
        label="Menu"
        assetsTabTrueDefaultFalseFlex="1"
        labelFontSize="14px"
        labelFontWeight="unset"
      />
      <AssetsTabTrueDefaultFalse
        label="Design"
        assetsTabTrueDefaultFalseFlex="1"
        labelFontSize="14px"
        labelFontWeight="unset"
      />
      {!assetsTabTrueDefaultFalse && (
        <div className="assetstabtruedefaultfalse6">
          <div className="label14">{label2}</div>
        </div>
      )}
      <div className="assetstabtruedefaultfalse6">
        <div className="label14">Upload</div>
      </div>
      <div className="assetstabtruedefaultfalse6">
        <div className="label14">Upload</div>
      </div>
      <div className="assetstabtruedefaultfalse6">
        <div className="label14">Upload</div>
      </div>
      <div className="assetstabtruedefaultfalse6">
        <div className="label14">Upload</div>
      </div>
      <div className="assetstabtruedefaultfalse6">
        <div className="label14">Upload</div>
      </div>
    </div>
  );
};

export default SmallScreenFalseFittedTru;
