import SmallScreenFalseStateDefa from "./small-screen-false-state-defa";
import "./type-container.css";

const TypeContainer = () => {
  return (
    <div className="radio-button-parent">
      <SmallScreenFalseStateDefa
        assetsRadio="/statedefault-checkedtrue-small-screenfalse.svg"
        label="Text"
        smallScreenFalseStateDefaPosition="absolute"
        smallScreenFalseStateDefaTop="25px"
        smallScreenFalseStateDefaLeft="0px"
        assetsRadioIconBorderRadius="100px"
      />
      <SmallScreenFalseStateDefa
        assetsRadio="/statedefault-checkedfalse-small-screenfalse.svg"
        label="External Link"
        smallScreenFalseStateDefaPosition="absolute"
        smallScreenFalseStateDefaTop="25px"
        smallScreenFalseStateDefaLeft="74px"
        assetsRadioIconBorderRadius="unset"
      />
      <div className="type">Type</div>
    </div>
  );
};

export default TypeContainer;
