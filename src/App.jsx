import SearchCity from "./components/SearchCity";
import AutoLoadCities from "./components/AutoLoadCities";
import "./App.css";

const Layout = () => {
	const cities = ["Sydney", "London", "Johannesburg", "California"];

	return (
		<div className="flex flex-col content-center justify-center lg:px-12 ">
			<SearchCity />
			<div className="flex flex-row flex-wrap justify-evenly lg:mx-28 mx-8 gap-2">
				{cities.map((city, index) => (
					<AutoLoadCities city={city} key={index} />
				))}
			</div>
		</div>
	);
};

export default Layout;
