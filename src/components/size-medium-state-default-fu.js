import { useMemo } from "react";
import "./size-medium-state-default-fu.css";

const SizeMediumStateDefaultFu = ({
  label,
  sizeMediumStateDefaultFuPosition,
  sizeMediumStateDefaultFuTop,
  sizeMediumStateDefaultFuLeft,
  sizeMediumStateDefaultFuWidth,
  sizeMediumStateDefaultFuHeight,
}) => {
  const sizeMediumStateDefaultFuStyle = useMemo(() => {
    return {
      position: sizeMediumStateDefaultFuPosition,
      top: sizeMediumStateDefaultFuTop,
      left: sizeMediumStateDefaultFuLeft,
      width: sizeMediumStateDefaultFuWidth,
      height: sizeMediumStateDefaultFuHeight,
    };
  }, [
    sizeMediumStateDefaultFuPosition,
    sizeMediumStateDefaultFuTop,
    sizeMediumStateDefaultFuLeft,
    sizeMediumStateDefaultFuWidth,
    sizeMediumStateDefaultFuHeight,
  ]);

  return (
    <div
      className="sizemedium-statedefault-fu"
      style={sizeMediumStateDefaultFuStyle}
    >
      <div className="auto-layout-button1">
        <div className="label6">{label}</div>
      </div>
    </div>
  );
};

export default SizeMediumStateDefaultFu;
