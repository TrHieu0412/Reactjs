import React from "react";
import { Params, useParams } from "react-router-dom";
import Navigation from "../../components/Navigation/Navigation";
import Header from "../../components/Header/Header";
import "./Details.css";
const Details = () => {
  const param = useParams();
  console.log(param);
  const { staffListId } = param;
  return (
    <div>
      <Header />
      <div className="nav-add">
        <div className="nav">
          <Navigation />
        </div>
        <div class="details-id">
          <div className="details-title">
            <p>Profile People</p>
          </div>
          <div className="details-id-main">Id: {staffListId}</div>
        </div>
      </div>
    </div>
  );
};

export default Details;
