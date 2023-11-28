import { useMemo } from "react";
import SmallScreenFalse2 from "./small-screen-false2";
import SmallScreenFalse from "./small-screen-false";
import AssetsTableFooter from "./assets-table-footer";
import "./small-screen-false-links-fals.css";

const SmallScreenFalseLinksFals = ({
  textLabel,
  numericLabel,
  label,
  label1,
  label2,
  label3,
  label4,
  label5,
  showAssetsHeaderCell,
  assetsHeaderCellVisible,
  assetsHeaderCellVisible1,
  showAssetsTotalsRow,
  showLabel,
  labelVisible,
  labelVisible1,
  labelVisible2,
  labelVisible3,
  labelVisible4,
  labelVisible5,
  labelVisible6,
  labelVisible7,
  smallScreenFalseLinksFalsBorderRadius,
  smallScreenFalseLinksFalsBoxShadow,
  smallScreenFalseLinksFalsWidth,
  smallScreenFalseLinksFalsPosition,
  smallScreenFalseLinksFalsTop,
  smallScreenFalseLinksFalsLeft,
  smallScreenFalseLinksFalsHeight,
}) => {
  const smallScreenFalseLinksFalsStyle = useMemo(() => {
    return {
      borderRadius: smallScreenFalseLinksFalsBorderRadius,
      boxShadow: smallScreenFalseLinksFalsBoxShadow,
      width: smallScreenFalseLinksFalsWidth,
      position: smallScreenFalseLinksFalsPosition,
      top: smallScreenFalseLinksFalsTop,
      left: smallScreenFalseLinksFalsLeft,
      height: smallScreenFalseLinksFalsHeight,
    };
  }, [
    smallScreenFalseLinksFalsBorderRadius,
    smallScreenFalseLinksFalsBoxShadow,
    smallScreenFalseLinksFalsWidth,
    smallScreenFalseLinksFalsPosition,
    smallScreenFalseLinksFalsTop,
    smallScreenFalseLinksFalsLeft,
    smallScreenFalseLinksFalsHeight,
  ]);

  return (
    <div
      className="small-screenfalse-linksfals"
      style={smallScreenFalseLinksFalsStyle}
    >
      <SmallScreenFalse2
        textLabel="Product"
        textLabel1="Variant"
        numericLabel="SKU Number"
        numericLabel1="Units sold"
        numericLabel2="Total"
        showAssetsHeaderCell
        assetsHeaderCellVisible
        assetsHeaderCellVisible1
        assetsHeaderCellJustifyContent="flex-start"
        numericLabelTextAlign="left"
      />
      {showAssetsTotalsRow && (
        <div className="assetstotals-row">
          <div className="label48">Totals</div>
          <div className="label49">$100.00</div>
          <div className="label50">–</div>
          <div className="label51">456</div>
          <div className="label52">$123,456.00</div>
        </div>
      )}
      <SmallScreenFalse
        label="Label"
        label1="Label"
        label2="12334532"
        label3="14"
        label4="$130.00"
        showLabel
        labelVisible
        labelVisible1
        smallScreenFalseBoxShadow="0px -1px 0px #e1e3e5 inset"
        labelTextAlign="left"
      />
      <SmallScreenFalse
        label="Label"
        label1="Label"
        label2="12334532"
        label3="12"
        label4="$110.00"
        showLabel
        labelVisible
        labelVisible1
        smallScreenFalseBoxShadow="0px -1px 0px #e1e3e5 inset"
        labelTextAlign="left"
      />
      <SmallScreenFalse
        label="Label"
        label1="Label"
        label2="12334532"
        label3="11"
        label4="$108.00"
        showLabel
        labelVisible
        labelVisible1
        smallScreenFalseBoxShadow="0px -1px 0px #e1e3e5 inset"
        labelTextAlign="left"
      />
      <SmallScreenFalse
        label="Label"
        label1="Label"
        label2="12334532"
        label3="9"
        label4="$97.00"
        showLabel
        labelVisible
        labelVisible1
        smallScreenFalseBoxShadow="0px -1px 0px #e1e3e5 inset"
        labelTextAlign="left"
      />
      <SmallScreenFalse
        label="Label"
        label1="Label"
        label2="12334532"
        label3="5"
        label4="$60.00"
        showLabel
        labelVisible
        labelVisible1
        smallScreenFalseBoxShadow="0px -1px 0px #e1e3e5 inset"
        labelTextAlign="left"
      />
      <SmallScreenFalse
        label="Label"
        label1="Label"
        label2="12334532"
        label3="2"
        label4="$25.00"
        showLabel
        labelVisible
        labelVisible1
        smallScreenFalseBoxShadow="0px -1px 0px #e1e3e5 inset"
        labelTextAlign="left"
      />
      <SmallScreenFalse
        label="Label"
        label1="Label"
        label2="12334532"
        label3="2"
        label4="$25.00"
        showLabel
        labelVisible
        labelVisible1
        smallScreenFalseBoxShadow="0px -1px 0px #e1e3e5 inset"
        labelTextAlign="left"
      />
      <SmallScreenFalse
        label="Label"
        label1="Label"
        label2="12334532"
        label3="2"
        label4="$15.00"
        showLabel
        labelVisible
        labelVisible1
        smallScreenFalseBoxShadow="0px -1px 0px #e1e3e5 inset"
        labelTextAlign="left"
      />
      <SmallScreenFalse
        label="Label"
        label1="Label"
        label2="12334532"
        label3="2"
        label4="$15.00"
        showLabel
        labelVisible
        labelVisible1
        smallScreenFalseBoxShadow="0px -1px 0px #e1e3e5 inset"
        labelTextAlign="left"
      />
      <SmallScreenFalse
        label="Label"
        label1="Label"
        label2="12334532"
        label3="1"
        label4="$15.00"
        showLabel
        labelVisible
        labelVisible1
        smallScreenFalseBoxShadow="0px -1px 0px #e1e3e5 inset"
        labelTextAlign="left"
      />
      <SmallScreenFalse
        label="Label"
        label1="Label"
        label2="12334532"
        label3="1"
        label4="$15.00"
        showLabel
        labelVisible
        labelVisible1
        smallScreenFalseBoxShadow="unset"
        labelTextAlign="left"
      />
      <AssetsTableFooter label="Showing 13 of 13 results" />
    </div>
  );
};

export default SmallScreenFalseLinksFals;
