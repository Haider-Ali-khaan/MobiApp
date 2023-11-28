import StateDefaultActiveFalseS from "../components/state-default-active-false-s";
import StateDefaultActiveTrueSm from "../components/state-default-active-true-sm";
import StateDefault from "../components/state-default";
import SmallScreenfalseTypeBlank from "../components/small-screenfalse-type-blank";
import SizeMediumStateDefaultFu from "../components/size-medium-state-default-fu";
import TypeContainer from "../components/type-container";
import "./css/privacy-policy.css";

const PrivacyPolicy = () => {
  return (
    <div className="privacypolicy">
      <div className="privacypolicy1">
        <div className="privacypolicy-child" />
        <div className="half1" />
        <div className="index-filtering">
          <div className="views1">
            <StateDefaultActiveFalseS label="Home" path='/'/>
            <StateDefaultActiveTrueSm
              label="Privacy policy"
              showCaretDownMinorIcon={false}
            />
            <div className="assetsview-button6">
              <div className="label30">Terms and condition</div>
            </div>

            <StateDefaultActiveFalseS label="Terms and condition" />

            <StateDefault stateDefaultBoxSizing="border-box" />
          </div>
          <div className="controls1">
            <img
              className="search-filter-button1"
              alt=""
              src="/search-filter-button.svg"
            />
            <img className="sort-button-icon1" alt="" src="/sort-button.svg" />
          </div>
        </div>
        <div className="product">
          <SmallScreenfalseTypeBlank
            smallScreenfalseTypeBlankWidth="1067.4px"
            smallScreenfalseTypeBlankHeight="433.6px"
            smallScreenfalseTypeBlankPosition="absolute"
            smallScreenfalseTypeBlankTop="0px"
            smallScreenfalseTypeBlankLeft="0px"
          />
          <div className="label38">Set privacy policy page content.</div>
          <div className="product-child" />
        </div>
        <div className="primary-button1">
          <div className="auto-layout-button2">
            <div className="label39">Save</div>
          </div>
        </div>
        <SizeMediumStateDefaultFu
          label={`Save & Next`}
          sizeMediumStateDefaultFuPosition="absolute"
          sizeMediumStateDefaultFuTop="619.5px"
          sizeMediumStateDefaultFuLeft="1363.4px"
          sizeMediumStateDefaultFuWidth="130.3px"
          sizeMediumStateDefaultFuHeight="40.3px"
        />
      </div>
      <img className="image-30-icon" alt="" src="/image-30@2x.png" />
      <TypeContainer />
        <textarea className="privacypolicy-item" />
      
        <div className="file">File</div>
        <div className="edit">Edit</div>
        <div className="view">View</div>
        <div className="insert">Insert</div>
        <div className="format">Format</div>
        <div className="tools">Tools</div>
        <div className="table">Table</div>
      
      <div className="privacypolicy-inner" />
      <div className="rectangle-div" />
      {/* <div className="action-list">
        <div className="assetsaction-item">
          <div className="content">
            <img className="pagemajor-icon" alt="" src="/pagemajor.svg" />
            <div className="label40">New document</div>
          </div>
        </div>
        <div className="assetsaction-item">
          <div className="content">
            <img className="pagemajor-icon" alt="" src="/viewmajor-1.svg" />
            <div className="label40">Preview</div>
          </div>
        </div>
        <div className="assetsaction-item2">
          <div className="content2">
            <img className="pagemajor-icon" alt="" src="/printmajor-1.svg" />
            <div className="label40">Print</div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default PrivacyPolicy;
