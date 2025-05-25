const locationElement = document.getElementById("location");
const temperatureElement = document.getElementById("temperature");
const windElement = document.getElementById("wind");
const conditionElement = document.getElementById("condition"); 
// 1-4  Henter HTML-elementer ID-ene så man kan oppdatere de senere med værdata
const lat = 59.93;
const lon = 10.72;  // 6-7 latitude og longitude

const apiUrl = `https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=${lat}&lon=${lon}`;
// 9 Bygger opp en URL til MET sitt vær-API med koordinatene som parametre
async function getWeather() {
    try {
        const response = await fetch(apiUrl, {
            headers: { "User-Agent": "YRAPI/1.0 (kult@email.com)" }
        });
// 11 Starter en asynkron funksjon for å hente værdata fra API-et
// 12 Starter en try-blokk for å håndtere eventuelle feil i API-kallet
// 13-15 Sender et API-kall til MET med fetch, og inkluderer en påkrevd User-Agent-header

        if (!response.ok) throw new Error("Failed to fetch weather data");
// 20 sjekker om svaret er gylding, om det ikke så kommer feilmelding
        const data = await response.json();
// 22 Leser og tolker svaret som JSON

        const forecast = data.properties.timeseries[0].data.instant.details;
        const condition = data.properties.timeseries[0].data.next_1_hours.summary.symbol_code;
// 25-26 Henter ut: tempratur og vind. symbolkode for vær (cloudy)


        temperatureElement.textContent = forecast.air_temperature;
        windElement.textContent = forecast.wind_speed;
        conditionElement.textContent = condition.replace(/_/g, " ");
// 30-32 ): Skriver dataene inn i HTML-elementene: tempratur og vindhastighet direkte
// værbeskrivelsen gjøres synelig ved å bytte understrek med mellomrom


    } catch (error) {
        console.error(error);
        document.getElementById("weather-container").innerHTML = "<p>Failed to load weather data.</p>";
    }
}
// 37-41 Hvis noe går galt så logges feilen i konsollen og en feilmelding vises på nettsiden
// 44 laster dataen når siden lastes
getWeather();
