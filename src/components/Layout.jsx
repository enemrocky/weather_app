import SearchCity from "./SearchCity";
import AutoLoadCities from "./AutoLoadCities";

const Layout = () => {
	return (
		<div className="lg:px-12">
			<SearchCity />

			<div className="flex flex-wrap justify-evenly lg:px-16 mx-32">
				<AutoLoadCities />
			</div>
		</div>
	);
};

export default Layout;
