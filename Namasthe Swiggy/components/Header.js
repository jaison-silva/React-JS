import { SWIGGY_LOGO } from "../utils/constants";
import { useState, useContext, use } from "react";
import { SharedListContext } from "../app";
import useOnlineStatus from "../utils/onlineStatus";

const Header = () => {
  const [searchVal, setSearchVal] = useState("");
  const { hotelList, setHotelList } = useContext(SharedListContext);
  const isOnline = useOnlineStatus();

  return (
    <div className="thala">
      <img className="logo" src={SWIGGY_LOGO} />
      <div className="nav-items">
        <ul>
          <li>Online Status : {isOnline ? "🟢":"🔴"}</li>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <input
            value={searchVal}
            onChange={(e) => setSearchVal(e.target.value)}
          ></input>
          <button
            onClick={() => {
              if (hotelList && hotelList.length > 0) {

                if (searchVal.trim() === "") {
                  console.log("Search is empty, displaying all hotels.");
                  return;
                }

                const find = hotelList.filter((val) =>
                  val.info.name &&
                  val.info.name.toLowerCase().includes(searchVal.toLowerCase())
                );
                setHotelList(find);
                console.log("Done")
              } else {
                console.error("Hotel list is empty or undefined.");
              }
            }}
          >
            Search
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
