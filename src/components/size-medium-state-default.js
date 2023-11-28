import { useMemo } from "react";
import "./size-medium-state-default.css";

const SizeMediumStateDefault = ({
  label,
  sizeMediumStateDefaultPosition,
  sizeMediumStateDefaultTop,
  sizeMediumStateDefaultLeft,
}) => {
  const sizeMediumStateDefaultStyle = useMemo(() => {
    return {
      position: sizeMediumStateDefaultPosition,
      top: sizeMediumStateDefaultTop,
      left: sizeMediumStateDefaultLeft,
    };
  }, [
    sizeMediumStateDefaultPosition,
    sizeMediumStateDefaultTop,
    sizeMediumStateDefaultLeft,
  ]);

  return (
    <div
      className="sizemedium-statedefault"
      style={sizeMediumStateDefaultStyle}
    >
      <div className="label8">{label}</div>
    </div>
  );
};

export default SizeMediumStateDefault;
