import { WiHumidity } from "react-icons/wi";
import { BiTachometer } from "react-icons/bi";
import { FaWind } from "react-icons/fa";
import PropTypes from "prop-types";

const MainResult = ({
	cityName,
	dateTime,
	currentTemp,
	minTemp,
	maxTemp,
	humidity,
	pressure,
	windSpeed,
	cloudsDescription,
	icon,
	weatherData,
}) => {
	return (
		<div className="flex text-xl mb-10">
			<div className="flex flex-col md:flex-row justify-between bg-white mx-auto w-8/12 md:w-full max-w-lg text-sm gap-4 shadow-lg rounded-lg p-4">
				<div className="flex flex-col md:w-1/2 justify-center mx-auto">
					<div className="text-2xl mb-4">{dateTime}</div>{" "}
					{/* Only time is shown here */}
					<div className="flex items-center mb-2">
						<WiHumidity className="text-4xl h-8 " />
						<span>{humidity}%</span>
					</div>
					<div className="flex items-center mb-2">
						<BiTachometer className="text-3xl mr-1" />
						<span>{pressure} hPa</span>
					</div>
					<div className="flex items-center">
						<FaWind className="text-2xl pt-1 mr-2" />
						<span>{windSpeed} m/s</span>
					</div>
					<div className="hidden md:flex flex-col gap-2 mt-8">
						<h3 className="font-semibold">Next Up</h3>
						{weatherData.map((data) => (
							<div
								key={data[data]}
								className="flex justify-between bg-[#f7ffff] py-2 px-1 shadow-md rounded-lg flex-nowrap">
								<div className="uppercase font-normal text-xs text-nowrap">
									{new Date(data.dt_txt).toLocaleTimeString(
										[],
										{
											hour: "2-digit",
											minute: "2-digit",
										}
									)}
								</div>
								<div className="uppercase font-bold text-xs text-nowrap">
									{data.main.temp_min}°C /{" "}
									{data.main.temp_max}°C
								</div>
							</div>
						))}
					</div>
				</div>
				<div className="flex flex-col gap-4 md:w-1/2 items-center text-center py-4 px-4">
					<div className="uppercase font-bold text-4xl">
						{cityName}
					</div>
					<img
						src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
						className="w-24 h-24"
						alt="Weather Icon"
					/>
					<p className="capitalize">{cloudsDescription}</p>
					<h1 className="text-6xl font-bold">{currentTemp}°C</h1>
					<div className="text-lg font-medium">
						{minTemp}°C / {maxTemp}°C
					</div>
				</div>
			</div>
		</div>
	);
};

MainResult.propTypes = {
	dateTime: PropTypes.string,
	currentTemp: PropTypes.string,
	minTemp: PropTypes.string,
	maxTemp: PropTypes.string,
	humidity: PropTypes.number,
	pressure: PropTypes.number,
	windSpeed: PropTypes.number,
	cloudsDescription: PropTypes.string,
	icon: PropTypes.string,
	cityName: PropTypes.string,
	weatherData: PropTypes.array,
};

export default MainResult;
