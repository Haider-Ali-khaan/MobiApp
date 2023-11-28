import React from "react";
import "./css/test.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <header>
        <nav>
          <a href="#">Home</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms and Conditions</a>
        </nav>
        <div className="menu">
          <button>Block</button>
          <button>Menu</button>
          <button>Design</button>
          <button>Preview</button>
        </div>
        <div className="edit">
          <button>Edit</button>
        </div>
        <div className="search">
          <input type="text" placeholder="Search..." />
        </div>
        <div className="user">
          <h3>Hello</h3>
          <p>Q Search text</p>
        </div>
      </header>
      <main>
        <div className="search-block">
          <h2>Search Here</h2>
          <div className="no-image">
            <p>NO IMAGE AVAILABLE</p>
          </div>
          <div className="no-image">
            <p>NO IMAGE AVAILABLE</p>
          </div>
          <input type="text" placeholder="Searchbar text" />
        </div>
        <div className="portfolio-slider-block">
          <h2>Portfolio Title</h2>
          <div className="portfolio-slider">
            <div className="portfolio-slide">
              <h3>Home page</h3>
              <button>BUY NOW</button>
            </div>
            <div className="portfolio-slide">
              <h3>About us</h3>
              <button>Learn More</button>
            </div>
            <div className="portfolio-slide">
              <h3>Contact us</h3>
              <button>Get in touch</button>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <button>Save & Next</button>
      </footer>
    </div>
  );
};

export default Dashboard;
