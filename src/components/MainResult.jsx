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
	{
		/* .toLocaleTimeString([], {
									hour: "2-digit",
									minute: "2-digit",
								}) */
	}
	console.log(weatherData);

	return (
		<div className="flex p-6 text-xl">
			<div className="flex justify-between bg-white m-auto mt-16 w-full max-w-lg text-sm gap-4 shadow-lg rounded-lg p-4">
				<div className="flex flex-col w-1/3">
					<div className="text-2xl mb-4">{dateTime}</div>{" "}
					{/* Only time is shown here */}
					<div className="flex items-center mb-2">
						<WiHumidity className="text-4xl h-8 mr-2" />
						<span>{humidity}%</span>
					</div>
					<div className="flex items-center mb-2">
						<BiTachometer className="text-3xl mr-2" />
						<span>{pressure} hPa</span>
					</div>
					<div className="flex items-center">
						<FaWind className="text-2xl pt-1 mr-2" />
						<span>{windSpeed} m/s</span>
					</div>
					{weatherData.map((data) => (
						<div key={Math.random() * 1000} className="flex">
							<div className="uppercase font-medium text-2xl">
								{data.dt_txt}
							</div>
							<div className="uppercase font-medium text-2xl">
								{data.main.temp_min}
							</div>
							<div className="uppercase font-medium text-2xl">
								{data.main.temp_max}
							</div>
							<div className="uppercase font-medium text-2xl">
								{data.weather[0].description}
							</div>
						</div>
					))}
				</div>
				<div className="flex flex-col gap-3 w-2/3 items-center text-center">
					<div className="uppercase font-medium text-2xl">
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
