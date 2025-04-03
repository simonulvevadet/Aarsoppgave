const locationElement = document.getElementById("location");
const temperatureElement = document.getElementById("temperature");
const windElement = document.getElementById("wind");
const conditionElement = document.getElementById("condition");
const iconElement = document.getElementById("weather-icon");

const lat = 59.93;
const lon = 10.72;

const apiUrl = `https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=${lat}&lon=${lon}`;

async function getWeather() {
    try {
        const response = await fetch(apiUrl, {
            headers: { "User-Agent": "YourAppName/1.0 (your@email.com)" }
        });

        if (!response.ok) throw new Error("Failed to fetch weather data");

        const data = await response.json();

        // Extract weather info
        const forecast = data.properties.timeseries[0].data.instant.details;
        const condition = data.properties.timeseries[0].data.next_1_hours.summary.symbol_code;

        temperatureElement.textContent = forecast.air_temperature;
        windElement.textContent = forecast.wind_speed;
        conditionElement.textContent = condition.replace(/_/g, " ");

        // Set weather icon
        iconElement.src = `https://github.com/metno/weathericons/blob/main/weathericons/png/${condition}.png?raw=true`;

    } catch (error) {
        console.error(error);
        document.getElementById("weather-container").innerHTML = "<p>Failed to load weather data.</p>";
    }
}

// Load weather data on page load
getWeather();
