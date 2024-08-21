import SearchCity from "./SearchCity";
import AutoLoadCities from "./AutoLoadCities";

const Layout = () => {
	return (
		<div className="">
			<SearchCity />

			<div className="flex">
				<AutoLoadCities />
				<AutoLoadCities />
				<AutoLoadCities />
			</div>
		</div>
	);
};

export default Layout;
