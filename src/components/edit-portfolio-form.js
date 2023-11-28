import SmallScreenFalseStateDisa from "./small-screen-false-state-disa";
import StateEnable from "./state-enable";
import SizeMediumStateDefault from "./size-medium-state-default";
import "./edit-portfolio-form.css";

const EditPortfolioForm = () => {
  return (
    <div className="portfolio">
      <img className="portfolio-child" alt="" src="/rectangle-676.svg" />


      

    
      <StateEnable
        label="Portfolio Slider Block"
        showLabel
        smallScreenFalseStateDisaPosition="absolute"
        smallScreenFalseStateDisaTop="17.9px"
        smallScreenFalseStateDisaLeft="21.7px"
        checkboxBackgroundColor="#2c6ecb"
        labelColor="#202223"
      />
      <div className="img">
        <img className="image-22-icon" alt="" src="/image-22@2x.png" />
        <img className="image-23-icon" alt="" src="/image-23@2x.png" />
      </div>
      <img
        className="dragdropmajor-1-icon2"
        alt=""
        src="/dragdropmajor-1.svg"
      />
      <div className="portfolio-item" />
      <SizeMediumStateDefault
        label="Edit"
        sizeMediumStateDefaultPosition="absolute"
        sizeMediumStateDefaultTop="20.2px"
        sizeMediumStateDefaultLeft="512px"
      />
      <button className="button">
        <div className="inner" />
        <img
          className="circleplusmajor-1-icon"
          alt=""
          src="/circleplusmajor-1.svg"
        />
      </button>
    </div>
  );
};

export default EditPortfolioForm;
