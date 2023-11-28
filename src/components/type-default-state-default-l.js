import { useMemo } from "react";
import StateDefaultActiveTrueSm from "./state-default-active-true-sm";
import StateDefaultActiveFalseS from "./state-default-active-false-s";
import StateDefault from "./state-default";
import "./type-default-state-default-l.css";
 
const TypeDefaultStateDefaultL = ({
  label,
  label1,
  label2,
  label3,
  showCaretDownMinorIcon,
  showAssetsViewButton,
  assetsViewButtonVisible,
  showControls,
  typeDefaultStateDefaultLBorderRadius,
  typeDefaultStateDefaultLBoxShadow,
  typeDefaultStateDefaultLWidth,
  typeDefaultStateDefaultLPosition,
  typeDefaultStateDefaultLTop,
  typeDefaultStateDefaultLLeft,
  typeDefaultStateDefaultLHeight,
}) => {
  const typeDefaultStateDefaultLStyle = useMemo(() => {
    return {
      borderRadius: typeDefaultStateDefaultLBorderRadius,
      boxShadow: typeDefaultStateDefaultLBoxShadow,
      width: typeDefaultStateDefaultLWidth,
      position: typeDefaultStateDefaultLPosition,
      top: typeDefaultStateDefaultLTop,
      left: typeDefaultStateDefaultLLeft,
      height: typeDefaultStateDefaultLHeight,
    };
  }, [
    typeDefaultStateDefaultLBorderRadius,
    typeDefaultStateDefaultLBoxShadow,
    typeDefaultStateDefaultLWidth,
    typeDefaultStateDefaultLPosition,
    typeDefaultStateDefaultLTop,
    typeDefaultStateDefaultLLeft,
    typeDefaultStateDefaultLHeight,
  ]);

  return (
    <div
      className="typedefault-statedefault-l"
      style={typeDefaultStateDefaultLStyle}
    >
      <div className="views">
        <StateDefaultActiveTrueSm label="Home" showCaretDownMinorIcon />
        <StateDefaultActiveFalseS label="Privacy policy" path='/privacypolicy'/>
        <StateDefaultActiveFalseS label="Terms and condition"/>
        
        <StateDefault stateDefaultBoxSizing="border-box" />
      </div>
      {/* {showControls && (
        <div className="controls">
          <img
            className="search-filter-button"
            alt=""
            src="/search-filter-button.svg"
          />
          <img className="sort-button-icon" alt="" src="/sort-button.svg" />
        </div>
      )} */}
    </div>
  );
};

export default TypeDefaultStateDefaultL;
