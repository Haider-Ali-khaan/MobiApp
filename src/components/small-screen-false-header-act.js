import { useMemo } from "react";
import SmallScreenFalseStateDefa2 from "./small-screen-false-state-defa";
import "./small-screen-false-header-act.css";

const SmallScreenFalseHeaderAct = ({
  label,
  label1,
  smallScreenFalseHeaderActWidth,
  smallScreenFalseHeaderActPosition,
  smallScreenFalseHeaderActTop,
  smallScreenFalseHeaderActLeft,
}) => {
  const smallScreenFalseHeaderActStyle = useMemo(() => {
    return {
      width: smallScreenFalseHeaderActWidth,
      position: smallScreenFalseHeaderActPosition,
      top: smallScreenFalseHeaderActTop,
      left: smallScreenFalseHeaderActLeft,
    };
  }, [
    smallScreenFalseHeaderActWidth,
    smallScreenFalseHeaderActPosition,
    smallScreenFalseHeaderActTop,
    smallScreenFalseHeaderActLeft,
  ]);

  return (
    <div
      className="small-screenfalse-header-act"
      style={smallScreenFalseHeaderActStyle}
    >
      <div className="label7">{label}</div>
      {/* <SmallScreenFalseStateDefa2 userInput="Jaded" /> */}
      <input type='search' placeholder="Search here..." className="searchInpt"/>
    </div>
  );
};

export default SmallScreenFalseHeaderAct;
