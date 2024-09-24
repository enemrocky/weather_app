import { useEffect, useState } from "react";
import MainResult from "./MainResult";

const SearchCity = () => {
	const [enteredCity, setEnteredCity] = useState("");
	const [cityName, setCityName] = useState("");
	const [currentTemp, setCurrentTemp] = useState("");
	const [minTemp, setMinTemp] = useState("");
	const [maxTemp, setMaxTemp] = useState("");
	const [humidity, setHumidity] = useState("");
	const [pressure, setPressure] = useState("");
	const [dateTime, setDateTime] = useState("");
	const [cloudsDescription, setcloudsDescription] = useState("");
	const [windSpeed, setWindSpeed] = useState("");
	const [icon, setIcon] = useState("");
	const [weatherData, setWeatherData] = useState("");

	const enteredCityHandler = (e) => {
		setEnteredCity(e.target.value);
	};

	const cityNameHandler = (e) => {
		e.preventDefault();
		setCityName(enteredCity);
		setEnteredCity("");
	};

	useEffect(() => {
		fetch(
			`https://api.openweathermap.org/data/2.5/forecast/?q=${cityName}&appid=dd6b59dff3f04ae6dc9f6af9110f9f38&units=metric&cnt=7`
		)
			.then((response) => response.json())
			.then((data) => {
				const dateObj = new Date(data.list[0].dt_txt);
				setDateTime(
					dateObj.toLocaleTimeString([], {
						hour: "2-digit",
						minute: "2-digit",
					})
				);
				setCurrentTemp(data.list[0].main.feels_like.toFixed(1));
				setMinTemp(data.list[0].main.temp_min.toFixed(1));
				setMaxTemp(data.list[0].main.temp_max.toFixed(1));
				setPressure(data.list[0].main.pressure);
				setHumidity(data.list[0].main.humidity);
				setWindSpeed(data.list[0].wind.speed);
				setcloudsDescription(data.list[0].weather[0].description);
				setIcon(data.list[0].weather[0].icon);
				setWeatherData(data.list.splice(1, 4, data.list.length - 1));
			})
			.catch((error) => {
				console.log(error);
			});
	}, [cityName]);

	return (
		<>
			<div className="w-8/12 lg:w-5/12 mx-auto mt-10 flex mb-16">
				<form className="bg-white w-full h-fit rounded-lg border-none mx-auto">
					<input
						className="px-4 py-2 outline-none w-9/12"
						type="text"
						placeholder="Search cities"
						onChange={enteredCityHandler}
						value={enteredCity}
					/>
					<button
						className="bg-orange-500 p-4 text-white basis-1 font-semibold rounded-e-lg shadow-md w-3/12"
						type="submit"
						onClick={cityNameHandler}>
						Search
					</button>
				</form>
			</div>
			<div>
				{weatherData && (
					<MainResult
						cityName={cityName}
						dateTime={dateTime}
						currentTemp={currentTemp}
						minTemp={minTemp}
						maxTemp={maxTemp}
						humidity={humidity}
						pressure={pressure}
						windSpeed={windSpeed}
						cloudsDescription={cloudsDescription}
						icon={icon}
						weatherData={weatherData}
					/>
				)}
			</div>
		</>
	);
};

export default SearchCity;
