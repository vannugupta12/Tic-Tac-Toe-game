const weatherData = {
    delhi: { temp: 32, humidity: 60, wind: 12, type: "sunny" },
    mumbai: { temp: 28, humidity: 80, wind: 9, type: "rainy" },
    shimla: { temp: 12, humidity: 50, wind: 6, type: "cold" },
    kolkata: { temp: 30, humidity: 70, wind: 10, type: "cloudy" }
};

const searchBtn = document.getElementById("searchBtn");
const citySelect = document.getElementById("citySelect");
const loader = document.getElementById("loader");
const weatherBox = document.getElementById("weatherBox");
const toggleMode = document.getElementById("toggleMode");

searchBtn.addEventListener("click", getWeather);
toggleMode.addEventListener("click", toggleDarkMode);

function getWeather() {

    const city = citySelect.value;

    if (!city) {
        alert("Please select a city");
        return;
    }

    loader.style.display = "block";
    weatherBox.style.display = "none";

    setTimeout(() => {

        const data = weatherData[city];

        document.getElementById("cityName").innerText = city.toUpperCase();
        document.getElementById("temperature").innerText = "🌡 Temp: " + data.temp + "°C";
        document.getElementById("humidity").innerText = "💧 Humidity: " + data.humidity + "%";
        document.getElementById("wind").innerText = "🌬 Wind: " + data.wind + " km/h";

        setIcon(data.type);

        loader.style.display = "none";
        weatherBox.style.display = "block";

    }, 1000);
}

function setIcon(type) {
    const icon = document.getElementById("icon");

    if (type === "sunny") icon.innerHTML = "☀";
    else if (type === "rainy") icon.innerHTML = "🌧";
    else if (type === "cold") icon.innerHTML = "❄";
    else icon.innerHTML = "☁";
}

function toggleDarkMode() {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        toggleMode.innerText = "Light";
    } else {
        toggleMode.innerText = "Dark";
    }
}