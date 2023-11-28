import SmallScreenFalseSizeMediu from "./small-screen-false-size-mediu";
import "./footer.css";

const Footer = () => {
  return (
    <div className="pagination">
      <SmallScreenFalseSizeMediu
        sortMinor="/chevronleft-minor.svg"
        showLabel={false}
        smallScreenFalseSizeMediuBorderRadius="var(--br-9xs) 0px 0px var(--br-9xs)"
        autoLayoutButtonBorderRadius="var(--br-9xs) 0px 0px var(--br-9xs)"
        autoLayoutButtonBoxShadow="0px -1px 0px #bcbfc3 inset, 1px 0px 0px #bbbfc3 inset, 0px 1px 0px #bbbfc3 inset, 0px 1px 0px rgba(0, 0, 0, 0.05)"
        autoLayoutButtonBorder="unset"
        autoLayoutButtonPadding="8px 16px"
        autoLayoutButtonBackgroundColor="rgba(255, 255, 255, 0.01)"
      />
      <SmallScreenFalseSizeMediu
        sortMinor="/chevronright-minor.svg"
        showLabel={false}
        smallScreenFalseSizeMediuBorderRadius="0px var(--br-9xs) var(--br-9xs) 0px"
        autoLayoutButtonBorderRadius="0px var(--br-9xs) var(--br-9xs) 0px"
        autoLayoutButtonBoxShadow="0px 1px 0px rgba(0, 0, 0, 0.05)"
        autoLayoutButtonBorder="1px solid var(--color-silver-200)"
        autoLayoutButtonPadding="8px 16px"
        autoLayoutButtonBackgroundColor="unset"
      />
    </div>
  );
};

export default Footer;
