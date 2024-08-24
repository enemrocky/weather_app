// import { useState, useEffect } from "react";

// const AutoLoad4 = () => {
// 	const [cityName, setCityName] = useState("");
// 	const [currentTemp, setCurrentTemp] = useState("");
// 	const [minTemp, setMinTemp] = useState("");
// 	const [maxTemp, setMaxTemp] = useState("");
// 	const [cloudsDescription, setcloudsDescription] = useState("");
// 	const [icon, setIcon] = useState("");
// 	const [time, setTime] = useState("");

// 	useEffect(() => {
// 		fetch(
// 			"https://api.openweathermap.org/data/2.5/weather?q=California&appid=dd6b59dff3f04ae6dc9f6af9110f9f38&units=metric"
// 		)
// 			.then((response) => response.json())
// 			.then((data) => {
// 				// Convert the timestamp to milliseconds
// 				let date = new Date(data.dt * 1000);
// 				setTime(
// 					date.toLocaleTimeString([], {
// 						hour: "2-digit",
// 						minute: "2-digit",
// 					})
// 				);
// 				setCurrentTemp(data.main.temp.toFixed(1));
// 				setMinTemp(data.main.temp_min.toFixed(1));
// 				setMaxTemp(data.main.temp_max.toFixed(1));
// 				setCityName(data.name);
// 				setcloudsDescription(data.weather[0].description);
// 				setIcon(data.weather[0].icon);
// 			})
// 			.catch((error) => {
// 				console.log(error);
// 			});
// 	}, []);
// };
