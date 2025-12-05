import React, { createContext, useState, lazy, Suspense } from "react";
import reactDOM from "react-dom/client";
import "./index.css";
import swiggyData from "./utils/modelData";
// import Header from "./components/Header";
import { useEffect } from "react";
import Body from "./components/Body";
import Test from "./components/classComponent";

export const SharedListContext = createContext();

const AppLayout = () => {
  const restaurant =
    swiggyData?.card?.card?.gridElements?.infoWithStyle?.restaurants;
  const [hotelList, setHotelList] = useState([]);
  useEffect(() => {
    setHotelList(restaurant);
    console.log("Done useeffetct");
  }, []);

  const LazyLoadingHeader = lazy(() => import("./components/Header"));

  return (
    <div>
      <SharedListContext.Provider value={{ hotelList, setHotelList }}>
        <div className="app">
          <Suspense fallback = {<h2>loading...</h2>}>
            <LazyLoadingHeader />
          </Suspense>
          <Body />
        </div>
      </SharedListContext.Provider>
      <Test number={"8"} />
    </div>
  );
};

const container = document.getElementById("root");
if (container) { //if (!container._reactRootContainer) {
  const root = reactDOM.createRoot(container);
  root.render(<AppLayout />);
}

export default AppLayout;