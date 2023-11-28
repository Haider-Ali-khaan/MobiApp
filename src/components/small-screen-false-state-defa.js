import { useMemo } from "react";
import "./small-screen-false-state-defa3";

const SmallScreenFalseStateDefa = ({
  assetsRadio,
  label,
  smallScreenFalseStateDefaPosition,
  smallScreenFalseStateDefaTop,
  smallScreenFalseStateDefaLeft,
  assetsRadioIconBorderRadius,
}) => {
  const smallScreenFalseStateDefaStyle = useMemo(() => {
    return {
      position: smallScreenFalseStateDefaPosition,
      top: smallScreenFalseStateDefaTop,
      left: smallScreenFalseStateDefaLeft,
    };
  }, [
    smallScreenFalseStateDefaPosition,
    smallScreenFalseStateDefaTop,
    smallScreenFalseStateDefaLeft,
  ]);

  const assetsRadioIconStyle = useMemo(() => {
    return {
      borderRadius: assetsRadioIconBorderRadius,
    };
  }, [assetsRadioIconBorderRadius]);

  return (
    <div
      className="small-screenfalse-statedefa3"
      style={smallScreenFalseStateDefaStyle}
    >
      <input type='radio' className="assetsradio-icon1" style={assetsRadioIconStyle}/>
      
      <div className="label29">{label}</div>
    </div>
  );
};

export default SmallScreenFalseStateDefa;
