import React from "react";

const Menu = () => {
  return (
    <>
      <h1 className="text-center mt-9 text-3xl font-bold">
        Our <span className="text-yellow-400/80">TASTY </span>Menu
      </h1>
      <div className="flex items-center my-6 justify-center gap-3 mt-32 flex-wrap">
        <div className="card w-96 bg-base-100 shadow-xl image-full">
          <figure>
            <img
              src="https://img.freepik.com/free-photo/grilled-beef-burger-with-cheese-fries-generated-by-ai_24640-82256.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-yellow-500 font-bold">
              Cheese Burger
            </h2>
            <p>Most Cheesy you will ever have!</p>
            <div className="card-actions justify-end">
              <button className="btn btn-warning">Order</button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl image-full">
          <figure>
            <img src="https://img.freepik.com/free-photo/grilled-beef-burger-with-melted-cheddar-cheese-generative-ai_188544-40944.jpg" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-yellow-500 font-bold">
              Chicken Burger
            </h2>
            <p>Fill Your Empty Stomach!</p>
            <div className="card-actions justify-end">
              <button className="btn btn-warning">Order</button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl image-full">
          <figure>
            <img src="https://img.freepik.com/free-photo/grilled-beef-burger-with-cheese-tomato-onion-generated-by-ai_24640-81954.jpg" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-yellow-500 font-bold">
              Beef Burger
            </h2>
            <p>Giving You the best BEEF Flavour!</p>
            <div className="card-actions justify-end">
              <button className="btn btn-warning">Order</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
