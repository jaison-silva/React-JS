import { CARD_IMG } from "../utils/constants";

const RestaurantCard = ({prop}) => {
    return (
      <div>
        <div className="res-card">
          <h3>Name : {prop.name} </h3>
          <img
            className="card-img"
          src={ CARD_IMG + prop.cloudinaryImageId}
            alt="shit"
          />
          <h4>North Indian, Main Course</h4>
          <h4>Rating : {prop.avgRating}</h4>
          <h4>ETA : 38mins</h4>
        </div>
      </div>
    );
  };

  export default RestaurantCard