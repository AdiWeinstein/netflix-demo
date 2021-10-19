import React, { useContext } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import ListItem from "./ListItem";
import "../List/List.css";
import { MoviesContext } from "../Context/MoviesContext";

function List() {
  const { topRate } = useContext(MoviesContext);
  //   const img_api = "https://image.tmdb.org/t/p/w1280";
  return (
    <div className="list">
      <h3 className="list-title">Continue to watch</h3>
      <div className="slider">
        <BiChevronLeft className="slider-arrow left" />
        {topRate.length > 0 && <ListItem />}
        <BiChevronRight className="slider-arrow right" />
      </div>
    </div>
  );
}

export default List;
