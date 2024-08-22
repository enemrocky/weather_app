import SearchCity from "./SearchCity";
import AutoLoadCities from "./AutoLoadCities";

const Layout = () => {
	return (
		<div className="bg-red-300">
			<SearchCity />

			<div className="flex justify-evenly bg-green-300 lg:px-16">
				<AutoLoadCities />
			</div>
		</div>
	);
};

export default Layout;
