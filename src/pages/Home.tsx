// Home.tsx
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Link to="/about">
        <button>About</button>
      </Link>
    </div>
  );
};

export default Home;
