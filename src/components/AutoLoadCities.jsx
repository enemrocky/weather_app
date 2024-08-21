import { useEffect, useState } from "react";

const AutoLoadCities = () => {
	const [cityName, setCityName] = useState("");
	const [currentTemp, setCurrentTemp] = useState("");
	const [minTemp, setMinTemp] = useState("");
	const [maxTemp, setMaxTemp] = useState("");
	const [cloudsDescription, setcloudsDescription] = useState("");
	const [icon, setIcon] = useState("");
	const [time, setTime] = useState("");

	useEffect(() => {
		fetch(
			"https://api.openweathermap.org/data/2.5/weather?q=Sydney&appid=dd6b59dff3f04ae6dc9f6af9110f9f38&units=metric"
		)
			.then((response) => response.json())
			.then((data) => {
				// Convert the timestamp to milliseconds
				let date = new Date(data.dt * 1000);
				setTime(
					date.toLocaleTimeString([], {
						hour: "2-digit",
						minute: "2-digit",
					})
				);
				setCurrentTemp(data.main.temp.toFixed(1));
				setMinTemp(data.main.temp_min.toFixed(1));
				setMaxTemp(data.main.temp_max.toFixed(1));
				setCityName(data.name);
				setcloudsDescription(data.weather[0].description);
				setIcon(data.weather[0].icon);
			});
	}, []);

	return (
		<div className="flex flex-col gap-3 w-2/3 items-center text-center">
			<div className="uppercase font-medium text-2xl">{cityName}</div>
			<div className="font-medium text-base">{time}</div>

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
	);
};

export default AutoLoadCities;
