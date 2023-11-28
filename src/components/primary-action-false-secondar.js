import { useMemo } from "react";
import Footer from "./footer";
import "./primary-action-false-secondar.css";

const PrimaryActionFalseSecondar = ({
  primaryActionFalseSecondaPosition,
  primaryActionFalseSecondaBottom,
  primaryActionFalseSecondaLeft,
}) => {
  const primaryActionFalseSecondarStyle = useMemo(() => {
    return {
      position: primaryActionFalseSecondaPosition,
      bottom: primaryActionFalseSecondaBottom,
      left: primaryActionFalseSecondaLeft,
    };
  }, [
    primaryActionFalseSecondaPosition,
    primaryActionFalseSecondaBottom,
    primaryActionFalseSecondaLeft,
  ]);

  return (
    <div
      className="primary-actionfalse-secondar"
      style={primaryActionFalseSecondarStyle}
    >
      <Footer />
    </div>
  );
};

export default PrimaryActionFalseSecondar;
