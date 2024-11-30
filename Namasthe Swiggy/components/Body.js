import RestaurantCard from "./RestaurantCard"
import swiggyData from "../utils/modelData"
import { useEffect, useState, useTransition } from "react";
import { LIVE_SWIGGYDATA } from "../utils/constants";


const Body = () => {
  const restaurant = swiggyData?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    let [hotelList, setHotelList] = useState([])

  let data = async () =>{
    const response = await fetch(`https://cors-anywhere.herokuapp.com/${LIVE_SWIGGYDATA}`);
    if(!response.ok){
      throw new Error("response" + response.status)
    }
    const jsonData = await response.json
    
    console.log("this is data" + jsonData)
    console.log("this is data" + response)
    setHotelList(jsonData)
  }

  useEffect(()=>{
    data()
  })
    // console.log(restaurant)
  return (
    <div className="res-container">
      {/* <button onClick={()=>{
        hotelList = hotelList.filter((val)=>{
          return val.info.avgRating>4.4
        })
        setHotelList(hotelList)
      }}>show top hotels </button> */}
      {
      hotelList.map((restaurant)=>{
        return <RestaurantCard key={restaurant.info.id} prop = {restaurant.info}/>
      })}
    </div>
  );
};


export default Body;