import { useEffect, useState } from "react";

const AutoLoadCities = () => {
	// const [enteredCity, setEnteredCity] = useState("");
	// const [cityName, setCityName] = useState("");
	// const [currentTemp, setCurrentTemp] = useState("");
	// const [minTemp, setMinTemp] = useState("");
	// const [maxTemp, setMaxTemp] = useState("");
	// const [humidity, setHumidity] = useState("");
	// const [pressure, setPressure] = useState("");
	// const [dateTime, setDateTime] = useState("");
	// const [cloudsDescription, setcloudsDescription] = useState("");
	// const [windSpeed, setWindSpeed] = useState("");
	// const [icon, setIcon] = useState("");
	const [data, setData] = useState("");

	// const enteredCityHandler = (e) => {
	// 	setEnteredCity(e.target.value);
	// };

	// const cityNameHandler = (e) => {
	// 	e.preventDefault();
	// 	setCityName(enteredCity);
	// 	setEnteredCity("");
	// };

	useEffect(() => {
		fetch(
			`https://api.openweathermap.org/data/2.5/forecast?q=Sydney&appid=dd6b59dff3f04ae6dc9f6af9110f9f38&units=metric`
		)
			.then((response) => response.json())
			.then((data) => {
				// const dateObj = new Date(data.list[0].dt_txt);
				// setDateTime(
				// 	dateObj.toLocaleTimeString([], {
				// 		hour: "2-digit",
				// 		minute: "2-digit",
				// 	})
				// );
				// setCurrentTemp(data.list[0].main.feels_like.toFixed(1));
				// setMinTemp(data.list[0].main.temp_min.toFixed(1));
				// setMaxTemp(data.list[0].main.temp_max.toFixed(1));
				// setPressure(data.list[0].main.pressure);
				// setHumidity(data.list[0].main.humidity);
				// setWindSpeed(data.list[0].wind.speed);
				// setcloudsDescription(data.list[0].weather[0].description);
				// setIcon(data.list[0].weather[0].icon);
				setData(data.list);
			});
		console.log(data);
	}, []);
};

export default AutoLoadCities;
