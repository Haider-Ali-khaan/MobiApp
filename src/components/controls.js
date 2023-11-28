import "./controls.css";

const Controls = ({ searchFilterButton }) => {
  return (
    <div className="controls2">
      <img className="search-filter-button2" alt="" src={searchFilterButton} />
      <img className="sort-button-icon2" alt="" src="/sort-button.svg" />
    </div>
  );
};

export default Controls;
