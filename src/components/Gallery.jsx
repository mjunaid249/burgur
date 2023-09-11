import React from "react";

const Gallery = () => {
  return (
    <div className="m-6">
      <h1 className="text-center my-4 text-3xl font-bold">
        Some Shots of our{" "}
        <span className="text-yellow-400/80">TASTY BURGURS</span>
      </h1>
      <div className="carousel carousel-end rounded-box">
        <div className="carousel-item">
          <img
            src="https://img.freepik.com/free-photo/classic-american-double-burger-isolated-white-background_90220-1194.jpg"
            alt="Drink"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://img.freepik.com/free-photo/fresh-tasty-cheeseburger-isolated-white-background-delicious-big-sandwich_90220-1196.jpg"
            alt="Drink"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://img.freepik.com/free-photo/double-hamburger-isolated-white-background-fresh-burger-fast-food-with-beef-cream-cheese_90220-1192.jpg"
            alt="Drink"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://img.freepik.com/free-photo/hamburger-with-cheese-lettuce-it_1340-31392.jpg"
            alt="Drink"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
