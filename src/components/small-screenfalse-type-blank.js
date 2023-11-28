import { useMemo } from "react";
import "./small-screenfalse-type-blank.css";

const SmallScreenfalseTypeBlank = ({
  smallScreenfalseTypeBlankWidth,
  smallScreenfalseTypeBlankHeight,
  smallScreenfalseTypeBlankPosition,
  smallScreenfalseTypeBlankTop,
  smallScreenfalseTypeBlankLeft,
}) => {
  const smallScreenfalseTypeBlankStyle = useMemo(() => {
    return {
      width: smallScreenfalseTypeBlankWidth,
      height: smallScreenfalseTypeBlankHeight,
      position: smallScreenfalseTypeBlankPosition,
      top: smallScreenfalseTypeBlankTop,
      left: smallScreenfalseTypeBlankLeft,
    };
  }, [
    smallScreenfalseTypeBlankWidth,
    smallScreenfalseTypeBlankHeight,
    smallScreenfalseTypeBlankPosition,
    smallScreenfalseTypeBlankTop,
    smallScreenfalseTypeBlankLeft,
  ]);

  return (
    <div
      className="small-screenfalse-typeblank"
      style={smallScreenfalseTypeBlankStyle}
    />
  );
};

export default SmallScreenfalseTypeBlank;
