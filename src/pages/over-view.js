import SmallScreenfalseTypeBlank from "../components/small-screenfalse-type-blank";
import MostViewedCollectionsContainer from "../components/most-viewed-collections-container";
import "./css/over-view.css";

const OverView = () => {
  return (
    <div className="overview">
      <main className="overview1">
        <img className="image-4-icon" alt="" src="/image-4@2x.png" />
        <div className="half2" />
        <div className="basic-button2">
          <div className="auto-layout-button8">
            <img
              className="calendarmajor-1-icon"
              alt=""
              src="/calendarmajor-1.svg"
            />
            <div className="label68">Today</div>
          </div>
        </div>
        <div className="overview-child" />
        <div className="card-parent">
          <SmallScreenfalseTypeBlank
            smallScreenfalseTypeBlankWidth="346px"
            smallScreenfalseTypeBlankHeight="104.2px"
            smallScreenfalseTypeBlankPosition="absolute"
            smallScreenfalseTypeBlankTop="0px"
            smallScreenfalseTypeBlankLeft="0px"
          />
          <div className="heading">Add to cart total</div>
          <div className="displaylarge">$ 0.00</div>
          <img
            className="cartfilledmajor-icon"
            alt=""
            src="/cartfilledmajor.svg"
          />
        </div>
        <div className="card-group">
          <SmallScreenfalseTypeBlank
            smallScreenfalseTypeBlankWidth="344.8px"
            smallScreenfalseTypeBlankHeight="104.2px"
            smallScreenfalseTypeBlankPosition="absolute"
            smallScreenfalseTypeBlankTop="0px"
            smallScreenfalseTypeBlankLeft="0px"
          />
          <div className="heading1">Add sales</div>
          <div className="displaylarge1">$ 0.00</div>
          <img
            className="analyticsfilledminor-icon"
            alt=""
            src="/analyticsfilledminor.svg"
          />
        </div>
        <div className="card-container">
          <SmallScreenfalseTypeBlank
            smallScreenfalseTypeBlankWidth="346px"
            smallScreenfalseTypeBlankHeight="104.2px"
            smallScreenfalseTypeBlankPosition="absolute"
            smallScreenfalseTypeBlankTop="0px"
            smallScreenfalseTypeBlankLeft="0px"
          />
          <div className="heading2">total app orders</div>
          <div className="displaylarge2">0</div>
          <img
            className="cartfilledmajor-icon"
            alt=""
            src="/productsfilledminor.svg"
          />
        </div>
        <div className="frame-parent">
          <div className="frame">
            <SmallScreenfalseTypeBlank
              smallScreenfalseTypeBlankWidth="1073.5px"
              smallScreenfalseTypeBlankHeight="104.2px"
              smallScreenfalseTypeBlankPosition="relative"
              smallScreenfalseTypeBlankTop="unset"
              smallScreenfalseTypeBlankLeft="unset"
            />
            <div className="heading-parent">
              <div className="heading3">Added to wishlist</div>
              <div className="displaylarge3">0</div>
            </div>
          </div>
          <div className="frame1">
            <div className="heading-group">
              <div className="heading4">Total app users</div>
              <div className="displaylarge3">0</div>
            </div>
            <div className="heading-container">
              <div className="heading5">Android downloads</div>
              <div className="displaylarge3">0</div>
            </div>
            <div className="frame-div">
              <div className="heading6">ios downloads</div>
              <div className="displaylarge3">0</div>
            </div>
          </div>
        </div>
        <MostViewedCollectionsContainer
          sectionTitle="Most viewed collections"
          itemTitle="Collection Name"
          collectionDescription="Summer special collation"
          imageResolution="1000"
          collectionExclusion="Exclude collection"
          itemCount="750"
          offerTitle="New offers"
          collectionId="654"
        />
        <MostViewedCollectionsContainer
          sectionTitle="Most Viewed Products"
          itemTitle="Product Name"
          collectionDescription="13.3-inch MacBook Air Apple M1 Chip with 8‑Core CPU and 8‑Core GPU 512 SSD"
          imageResolution="960"
          collectionExclusion=" MacBook Air Apple M1 Chip"
          itemCount="654"
          offerTitle="16 Ti Skis"
          collectionId="56"
          labelTop="829.2px"
          labelWidth="254px"
        />
      </main>
    </div>
  );
};

export default OverView;
