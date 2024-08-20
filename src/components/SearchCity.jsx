import { useEffect, useState } from "react";
import { WiHumidity } from "react-icons/wi";
import { BiTachometer } from "react-icons/bi";
import { FaWind } from "react-icons/fa";

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
			`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=dd6b59dff3f04ae6dc9f6af9110f9f38&units=metric`
		)
			.then((response) => response.json())
			.then((data) => {
				setDateTime(data.list[0].dt_txt);
				setCurrentTemp(data.list[0].main.feels_like.toFixed(1));
				setMinTemp(data.list[0].main.temp_min.toFixed(1));
				setMaxTemp(data.list[0].main.temp_max.toFixed(1));
				setPressure(data.list[0].main.pressure);
				setHumidity(data.list[0].main.humidity);
				setWindSpeed(data.list[0].wind.speed);
				setcloudsDescription(data.list[0].weather[0].description);
				setIcon(data.list[0].weather[0].icon);
				setWeatherData(data.list);
			});
		console.log(dateTime);
	}, [cityName]);

	return (
		<>
			<form className="bg-white w-fit p-2 m-auto ">
				<input
					type="text"
					placeholder="Search cities"
					onChange={enteredCityHandler}
					value={enteredCity}
				/>
				<button type="submit" onClick={cityNameHandler}>
					Search
				</button>
			</form>

			{/* result component */}
			<div className="flex gap-3 p-6 text-xl">
				<div className="flex justify-between bg-white m-auto mt-16 w-1/5 text-sm gap-4 shadow-[#139ca1] shadow-xl">
					<div className="flex flex-col *:mx-auto w-1/5 ">
						<div>{dateTime}</div>
						<div>
							<WiHumidity className="text-4xl h-8" />
							{humidity}
						</div>
						<div>
							<BiTachometer className="text-3xl" />
							{pressure}
						</div>
						<div>
							<FaWind className="text-2xl pt-1" />
							{windSpeed}
						</div>
					</div>
					<div className="flex flex-col gap-3 *:ms-4 bg-white p-6 text-xl w-4/5">
						<div className="uppercase font-medium">{cityName}</div>
						<img
							src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
							className="w-1/2 "
						/>
						<p>{cloudsDescription}</p>
						<h1 className="text-6xl">{currentTemp}</h1>
						<div className="text-lg font-medium">
							{minTemp} / {maxTemp}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default SearchCity;

// data.list.map((item) => {
// setDateTime(item.dt_txt);
// setCurrentTemp(item.main.feels_like);
// setMinTemp(item.main.temp_min);
// setMaxTemp(item.main.temp_max);
// setPressure(item.main.pressure);
// setHumidity(item.main.humidity);
// setWindSpeed(item.wind.speed);
// setcloudsDescription(item.weather[0].description);
// 	console.log(item);
// });
