import SmallScreenFalseStateDisa from "./small-screen-false-state-disa";
import StateEnable from "./state-enable";
import SizeMediumStateDefault from "./size-medium-state-default";
import SmallScreenFalseHeaderAct from "./small-screen-false-header-act";
import "./search-form-container.css";

const SearchFormContainer = () => {
  return (
    <div className="search">
      <StateEnable
        label="Search block"
        showLabel
        smallScreenFalseStateDisaPosition="absolute"
        smallScreenFalseStateDisaTop="17.9px"
        smallScreenFalseStateDisaLeft="21.7px"
        checkboxBackgroundColor="#2c6ecb"
        labelColor="#202223"
        
      />
      
      <div className="inputBox" >
        <input 
        className="Searchinput"
        placeholder='search here...'
        type='search'/>
      </div>
      
      <img
        className="dragdropmajor-1-icon1"
        alt=""
        src="/dragdropmajor-1.svg"
      />
      <div className="search-child" />
      <SizeMediumStateDefault
        label="Edit"
        sizeMediumStateDefaultPosition="absolute"
        sizeMediumStateDefaultTop="20.2px"
        sizeMediumStateDefaultLeft="512px"
      />
      {/* <div className="search-item" /> */}
      <button className="circleplusmajor-1">
        <img className="vector-icon1" alt="" src="/vector1.svg" />
        <img className="vector-icon2" alt="" src="/vector2.svg" />
      </button>
      <div className="search-inner" />
      <SmallScreenFalseHeaderAct
        label="Searchbar text"
        label1="Search Here..."
        smallScreenFalseHeaderActWidth="523.4px"
        smallScreenFalseHeaderActPosition="absolute"
        smallScreenFalseHeaderActTop="166.9px"
        smallScreenFalseHeaderActLeft="22.9px"
      />
    </div>
  );
};

export default SearchFormContainer;
