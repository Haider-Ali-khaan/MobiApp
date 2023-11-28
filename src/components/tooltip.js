import { useMemo } from "react";
import "./tooltip.css";

const Tooltip = ({
  thisOrderHasShippingLabel,
  tooltipWidth,
  tooltipPosition,
  tooltipTop,
  tooltipLeft,
  tooltipHeight,
}) => {
  const tooltipStyle = useMemo(() => {
    return {
      width: tooltipWidth,
      position: tooltipPosition,
      top: tooltipTop,
      left: tooltipLeft,
      height: tooltipHeight,
    };
  }, [tooltipWidth, tooltipPosition, tooltipTop, tooltipLeft, tooltipHeight]);

  return (
    <div className="tooltip" style={tooltipStyle}>
      <div className="this-order-has">{thisOrderHasShippingLabel}</div>
    </div>
  );
};

export default Tooltip;
