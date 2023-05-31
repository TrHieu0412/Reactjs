import React from "react";
import Header from "../components/Header/Header";
import Navigation from "../components/Navigation/Navigation";
import { useParams } from "react-router-dom";
const search = () => {
  // const param = useParams();
  return (
    <div>
      <Header />
      <div className="nav-add">
        <div className="nav">
          <Navigation />
        </div>
        <div className="search-inf"></div>
      </div>
    </div>
  );
};

export default search;
