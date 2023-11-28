import { useMemo } from "react";
import SmallScreenfalseTypeBlank from "./small-screenfalse-type-blank";
import SmallScreenFalseStateDefa3 from "./small-screen-false-state-defa3";
import Controls from "./controls";
import SmallScreenFalseLinksFals from "./small-screen-false-links-fals";
import PrimaryActionFalseSecondar from "./primary-action-false-secondar";
import "./most-viewed-collections-container.css";

const MostViewedCollectionsContainer = ({
  sectionTitle,
  itemTitle,
  collectionDescription,
  imageResolution,
  collectionExclusion,
  itemCount,
  offerTitle,
  collectionId,
  labelTop,
  labelWidth,
}) => {
  const productStyle = useMemo(() => {
    return {
      top: labelTop,
    };
  }, [labelTop]);

  const label4Style = useMemo(() => {
    return {
      width: labelWidth,
    };
  }, [labelWidth]);

  return (
    <div className="product1" style={productStyle}>
      <SmallScreenfalseTypeBlank
        smallScreenfalseTypeBlankWidth="1073.5px"
        smallScreenfalseTypeBlankHeight="420px"
        smallScreenfalseTypeBlankPosition="absolute"
        smallScreenfalseTypeBlankTop="0px"
        smallScreenfalseTypeBlankLeft="0px"
      />
      <div className="label70" style={label4Style}>
        {sectionTitle}
      </div>
      <div className="product-item" />
      <div className="index-filtering1">
        <SmallScreenFalseStateDefa3
          label="Search "
          smallScreenFalseStateDefaWidth="876px"
        />
        <Controls searchFilterButton="/search-filter-button2.svg" />
      </div>
      <SmallScreenFalseLinksFals
        textLabel="Collection Name"
        numericLabel="Views"
        label="Summer special collation"
        label1="1000"
        label2="Exclude collection"
        label3="750"
        label4="New offers"
        label5="654"
        showAssetsHeaderCell={false}
        assetsHeaderCellVisible={false}
        assetsHeaderCellVisible1={false}
        showAssetsTotalsRow={false}
        showLabel={false}
        labelVisible={false}
        labelVisible1={false}
        labelVisible2={false}
        labelVisible3={false}
        labelVisible4={false}
        labelVisible5={false}
        labelVisible6={false}
        labelVisible7={false}
        smallScreenFalseLinksFalsBorderRadius="unset"
        smallScreenFalseLinksFalsBoxShadow="unset"
        smallScreenFalseLinksFalsWidth="1073.5px"
        smallScreenFalseLinksFalsPosition="absolute"
        smallScreenFalseLinksFalsTop="121.6px"
        smallScreenFalseLinksFalsLeft="0px"
        smallScreenFalseLinksFalsHeight="225.8px"
      />
      <PrimaryActionFalseSecondar
        primaryActionFalseSecondaPosition="absolute"
        primaryActionFalseSecondaBottom="21.7px"
        primaryActionFalseSecondaLeft="calc(50% - 34.85px)"
      />
    </div>
  );
};

export default MostViewedCollectionsContainer;
