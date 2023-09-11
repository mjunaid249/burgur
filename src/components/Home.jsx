import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://img.freepik.com/free-photo/grilled-cheeseburger-sesame-bun-fresh-tomato-generated-by-ai_188544-25110.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">
            Welcome to <span className="text-yellow-500">Burgurzz</span>
          </h1>
          <p className="mb-5">Delivering the best BURGERS!</p>
          <Link to={"/menu"} className="btn btn-warning">
            Order Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
