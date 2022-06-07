import React from "react";
import Products from "../components/Products";

const Home = () => {
  return (
    <div>
      <div className="m-4">
        <h2 className="text-center" style={{ color: "red" }}>
          Welcome to the store
        </h2>
      </div>
      <Products />
    </div>
  );
};

export default Home;
