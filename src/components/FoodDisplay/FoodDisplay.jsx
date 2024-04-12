import { useContext } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";
const FoodDisplay = ({ category }) => {
	const { food_list } = useContext(StoreContext);
	const filteredFoodList = food_list.filter(
		(item) => category === "All" || category === item.category
	);
	return (
		<div className="food-display" id="food-display">
			<h2>Top dishes near you</h2>
			<div className="food-display-list">
				{filteredFoodList.length > 0 ? (
					filteredFoodList.map((item) => (
						<FoodItem
							key={item._id}
							id={item._id}
							name={item.name}
							image={item.image}
							price={item.price}
							description={item.description}
						/>
					))
				) : (
					<p>No food items available</p>
				)}
			</div>
		</div>
	);
};
export default FoodDisplay;
