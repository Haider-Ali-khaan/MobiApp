import { useMemo } from "react";
import "./small-screen-false-size-mediu.css";

const SmallScreenFalseSizeMediu = ({
  sortMinor,
  showLabel,
  smallScreenFalseSizeMediuBorderRadius,
  autoLayoutButtonBorderRadius,
  autoLayoutButtonBoxShadow,
  autoLayoutButtonBorder,
  autoLayoutButtonPadding,
  autoLayoutButtonBackgroundColor,
}) => {
  const smallScreenFalseSizeMediuStyle = useMemo(() => {
    return {
      borderRadius: smallScreenFalseSizeMediuBorderRadius,
    };
  }, [smallScreenFalseSizeMediuBorderRadius]);

  const autoLayoutButtonStyle = useMemo(() => {
    return {
      borderRadius: autoLayoutButtonBorderRadius,
      boxShadow: autoLayoutButtonBoxShadow,
      border: autoLayoutButtonBorder,
      padding: autoLayoutButtonPadding,
      backgroundColor: autoLayoutButtonBackgroundColor,
    };
  }, [
    autoLayoutButtonBorderRadius,
    autoLayoutButtonBoxShadow,
    autoLayoutButtonBorder,
    autoLayoutButtonPadding,
    autoLayoutButtonBackgroundColor,
  ]);

  return (
    <div
      className="small-screenfalse-sizemediu"
      style={smallScreenFalseSizeMediuStyle}
    >
      <div className="auto-layout-button7" style={autoLayoutButtonStyle}>
        <img className="sort-minor-icon1" alt="" src={sortMinor} />
        {showLabel && <div className="label67">Label</div>}
      </div>
    </div>
  );
};

export default SmallScreenFalseSizeMediu;
