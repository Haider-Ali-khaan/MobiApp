import TypeDefaultStateDefaultL from "../components/type-default-state-default-l";
import Tooltip from "../components/tooltip";
import TypeBlankTitlefalseHeade from "../components/type-blank-titlefalse-heade";
import SmallScreenFalseFittedTru from "../components/small-screen-false-fitted-tru";
import AssetsTabTrueSelectedFalse from "../components/assets-tab-true-selected-false";
import AssetsTabTrueDefaultFalse from "../components/assets-tab-true-default-false";
import EditFormContainer from "../components/edit-form-container";
import SearchFormContainer from "../components/search-form-container";
import EditPortfolioForm from "../components/edit-portfolio-form";
import PreviewContainer from "../components/preview-container";
import SizeMediumStateDefaultFu from "../components/size-medium-state-default-fu";
import "./css/home.css";

const Home = () => {
  return (
    <div className="home">
      <main className="home1">
        <div className="half" />
        <TypeDefaultStateDefaultL
          label="Home"
          label1="Privacy policy"
          label2="Terms and condition"
          showCaretDownMinorIcon={false}
          showAssetsViewButton={false}
          assetsViewButtonVisible={false}
          showControls={false}
          typeDefaultStateDefaultLBorderRadius="8px"
          typeDefaultStateDefaultLBoxShadow="unset"
          typeDefaultStateDefaultLWidth="1067.4px"
          typeDefaultStateDefaultLPosition="absolute"
          typeDefaultStateDefaultLTop="90.7px"
          typeDefaultStateDefaultLLeft="426.3px"
          typeDefaultStateDefaultLHeight="53.8px"
        />
        <Tooltip
          thisOrderHasShippingLabel="Add new custom page"
          tooltipWidth="186.3px"
          tooltipPosition="absolute"
          tooltipTop="75.1px"
          tooltipLeft="722.3px"
          tooltipHeight="31.4px"
        />
        <div className="div">
          <TypeBlankTitlefalseHeade
            typeBlankTitlefalseHeadeWidth="614.9px"
            typeBlankTitlefalseHeadeHeight="682.3px"
            typeBlankTitlefalseHeadePosition="absolute"
            typeBlankTitlefalseHeadeTop="0px"
            typeBlankTitlefalseHeadeLeft="0px"
          />
          <SmallScreenFalseFittedTru
            label="Block"
            label1="Menu"
            label2="Design"
            assetsTabTrueDefaultFalse
            smallScreenFalseFittedTruWidth="614.9px"
            smallScreenFalseFittedTruPosition="absolute"
            smallScreenFalseFittedTruTop="5.6px"
            smallScreenFalseFittedTruLeft="0px"
          />
          {/* <div className="tabs">
            <AssetsTabTrueSelectedFalse
              label="Block"
              assetsTabTrueSelectedFalsFlex="1"
              labelFontSize="20px"
              labelFontWeight="600"
            />
            <AssetsTabTrueDefaultFalse
              label="Menu"
              assetsTabTrueDefaultFalseFlex="1"
              labelFontSize="20px"
              labelFontWeight="600"
            />
            <AssetsTabTrueDefaultFalse
              label="Design"
              assetsTabTrueDefaultFalseFlex="1"
              labelFontSize="20px"
              labelFontWeight="600"
            />
            <div className="assetstabtruedefaultfalse">
              <div className="label">Upload</div>
            </div>
            <div className="assetstabtruedefaultfalse">
              <div className="label">Upload</div>
            </div>
            <div className="assetstabtruedefaultfalse">
              <div className="label">Upload</div>
            </div>
            <div className="assetstabtruedefaultfalse">
              <div className="label">Upload</div>
            </div>
            <div className="assetstabtruedefaultfalse">
              <div className="label">Upload</div>
            </div>
          </div> */}
          <div className="child" />
          <EditFormContainer />
          <SearchFormContainer />
          <EditPortfolioForm />
        </div>
        <Tooltip
          thisOrderHasShippingLabel={`Drag & drop`}
          tooltipWidth="110.9px"
          tooltipPosition="absolute"
          tooltipTop="397.7px"
          tooltipLeft="881.1px"
          tooltipHeight="31.4px"
        />
        <PreviewContainer />
        <div className="primary-button">
          <div className="auto-layout-button">
            <div className="label5">Save</div>
          </div>
        </div>
        <SizeMediumStateDefaultFu
          label={`Save & Next`}
          sizeMediumStateDefaultFuPosition="absolute"
          sizeMediumStateDefaultFuTop="867.1px"
          sizeMediumStateDefaultFuLeft="1363.4px"
          sizeMediumStateDefaultFuWidth="130.3px"
          sizeMediumStateDefaultFuHeight="40.3px"
        />
      </main>
    </div>
  );
};

export default Home;
