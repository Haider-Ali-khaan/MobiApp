import SmallScreenFalseStateDisa from "./small-screen-false-state-disa";
import SizeMediumStateDefault from "./size-medium-state-default";
import "./edit-form-container.css";

const EditFormContainer = () => {
  return (
    <div className="nav">
      <SmallScreenFalseStateDisa
        label="Navigation bar"
        showLabel
        smallScreenFalseStateDisaPosition="absolute"
        smallScreenFalseStateDisaTop="17.9px"
        smallScreenFalseStateDisaLeft="21.7px"
        checkboxBackgroundColor="#2c6ecb"
        labelColor="#202223"
      />
      <SmallScreenFalseStateDisa
        label="Label"
        showLabel={false}
        smallScreenFalseStateDisaPosition="absolute"
        smallScreenFalseStateDisaTop="17.9px"
        smallScreenFalseStateDisaLeft="21.7px"
        checkboxBackgroundColor="#bdc1cc"
        labelColor="1px solid #8c9196"
      />
      <div className="back" />
      <div className="hello">Hello</div>
      <img className="capa-1-icon" alt="" src="/capa-1.svg" />
      <button className="capa-1">
        <img className="vector-icon" alt="" src="/vector.svg" />
      </button>
      <img className="dragdropmajor-1-icon" alt="" src="/dragdropmajor-1.svg" />
      <div className="nav-child" />
      <SizeMediumStateDefault
        label="Edit"
        sizeMediumStateDefaultPosition="absolute"
        sizeMediumStateDefaultTop="20.2px"
        sizeMediumStateDefaultLeft="512px"
      />
    </div>
  );
};

export default EditFormContainer;
