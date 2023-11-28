import { useMemo } from "react";
import TypeIcon from "./type-icon";
import "./small-screen-false-state-defa3.css";

const SmallScreenFalseStateDefa3 = ({
  label,
  smallScreenFalseStateDefaWidth,
}) => {
  const smallScreenFalseStateDefa1Style = useMemo(() => {
    return {
      width: smallScreenFalseStateDefaWidth,
    };
  }, [smallScreenFalseStateDefaWidth]);

  return (
    <div
      className="small-screenfalse-statedefa4"
      style={smallScreenFalseStateDefa1Style}
    >
      <TypeIcon />
      <div className="label47">{label}</div>
    </div>
  );
};

export default SmallScreenFalseStateDefa3;
