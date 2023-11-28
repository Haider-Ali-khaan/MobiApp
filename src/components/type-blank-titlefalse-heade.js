import { useMemo } from "react";
import "./type-blank-titlefalse-heade.css";

const TypeBlankTitlefalseHeade = ({
  typeBlankTitlefalseHeadeWidth,
  typeBlankTitlefalseHeadeHeight,
  typeBlankTitlefalseHeadePosition,
  typeBlankTitlefalseHeadeTop,
  typeBlankTitlefalseHeadeLeft,
}) => {
  const typeBlankTitlefalseHeadeStyle = useMemo(() => {
    return {
      width: typeBlankTitlefalseHeadeWidth,
      height: typeBlankTitlefalseHeadeHeight,
      position: typeBlankTitlefalseHeadePosition,
      top: typeBlankTitlefalseHeadeTop,
      left: typeBlankTitlefalseHeadeLeft,
    };
  }, [
    typeBlankTitlefalseHeadeWidth,
    typeBlankTitlefalseHeadeHeight,
    typeBlankTitlefalseHeadePosition,
    typeBlankTitlefalseHeadeTop,
    typeBlankTitlefalseHeadeLeft,
  ]);

  return (
    <div
      className="typeblank-titlefalse-heade"
      style={typeBlankTitlefalseHeadeStyle}
    />
  );
};

export default TypeBlankTitlefalseHeade;
