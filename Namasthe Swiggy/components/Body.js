import RestaurantCard from "./RestaurantCard";
import swiggyData from "../utils/modelData";
import { useEffect, useState, useTransition } from "react";
import { LIVE_SWIGGYDATA } from "../utils/constants";
import {SharedListContext} from "../app"
import { useContext } from "react";

const Body = () => {
const {hotelList,setHotelList} = useContext(SharedListContext)
  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const response = await fetch(LIVE_SWIGGYDATA);
  //       if (!response.ok) {np
  //         throw new Error("HTTP Error: " + response.status);
  //       }
  //       const jsonData = await response.json();
  //       console.log("Data fetched: ", jsonData);
  //       setHotelList(LIVE_SWIGGYDATA);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   }
 
  //   fetchData();
  // }, []);

  return (
    <div className="res-container">
      {/* <button onClick={()=>{
        hotelList = hotelList.filter((val)=>{
          return val.info.avgRating>4.4
        }) 
        setHotelList(hotelList)
      }}>show top hotels </button> */}
      {hotelList.map((restaurant) => {
        return (
          <RestaurantCard key={restaurant.info.id} prop={restaurant.info} />
        );
      })}
    </div>
  );
};

export default Body;
