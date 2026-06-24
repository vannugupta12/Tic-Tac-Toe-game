const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Seattle';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'YOUR_API_KEY',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
async function getWeather() {
try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(hello);
} catch (error) {
	console.error(error);
}
}
alert("js working");
console.log("console workins")
getWeather();