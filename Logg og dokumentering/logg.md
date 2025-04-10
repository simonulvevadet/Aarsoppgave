
```markdown
# 🌤️ Hvordan fungerer værappen?

Denne værappen henter oppdatert værdata fra MET Norway sitt API og viser det i nettleseren. Her får du en steg-for-steg forklaring på hvordan dataen går fra API-et og ender opp i HTML.

---

## 📡 1. Hva er MET API?

MET (Meteorologisk institutt) tilbyr et offentlig API for værdata. Vi bruker deres **locationforecast 2.0 API**, som gir oss informasjon som:

- Temperatur
- Vind
- Værforhold (f.eks. "cloudy", "clear sky")
- Nedbør
- UV-indeks

API-et returnerer data i **JSON-format**, som er lett å jobbe med i JavaScript.

---

## 🌍 2. Hvordan henter vi data?

Vi bruker `fetch()` i JavaScript for å sende en forespørsel til API-et:

```js
const url = 'https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=59.93&lon=10.72';

fetch(url, {
  headers: {
    'User-Agent': 'MyWeatherApp/1.0 your@email.com'
  }
})
  .then(response => response.json())
  .then(data => {
    // Vi behandler dataen her
  });
```

> ⚠️ **Viktig:** API-et krever at du sender med en `User-Agent` header. Uten dette får du en 403-feil (Forbidden).

---

## 🔍 3. Behandle JSON-dataen

API-svaret inneholder en liste med værdata for ulike tidspunkt. Vi henter typisk det **første tidspunktet** (nærmest nå):

```js
const firstTime = data.properties.timeseries[0];
const details = firstTime.data.instant.details;

const temperature = details.air_temperature;
const windSpeed = details.wind_speed;
```

Vil du også vise værikon?

```js
const symbolCode = firstTime.data.next_1_hours.summary.symbol_code;
```

---

## 🧱 4. Vise dataen i HTML

Vi bruker `document.getElementById()` for å skrive værdataen inn i HTML-elementer:

```js
document.getElementById('temp').textContent = `${temperature}°C`;
document.getElementById('wind').textContent = `${windSpeed} m/s`;
document.getElementById('icon').src = `https://api.met.no/images/weathericons/${symbolCode}.svg`;
```

Eksempel på HTML:

```html
<p>Temperatur: <span id="temp"></span></p>
<p>Vind: <span id="wind"></span></p>
<img id="icon" alt="Værikon">
```

---

## 🔄 5. Flytdiagram

```text
[ Nettleser ] 
     ⬇
[ HTML + CSS lastes ]
     ⬇
[ JavaScript kjører fetch til MET API ]
     ⬇
[ API svarer med JSON-værdata ]
     ⬇
[ JS henter ut temperatur, ikon, vind osv. ]
     ⬇
[ JS skriver dataen inn i HTML-en ]
     ⬇
[ Brukeren ser været på nettsiden ]
```

---

## ✅ Oppsummering

- Vi henter data med `fetch()` fra MET API.
- Vi bruker `.json()` til å gjøre svaret lesbart i JavaScript.
- Vi plukker ut temperatur, vind og værtype.
- Vi skriver det inn i HTML-en med `textContent` og `src`.
- Resultatet er en dynamisk, levende værside!

---

## 📘 Kilder

- [MET API dokumentasjon](https://api.met.no/weatherapi/locationforecast/2.0/documentation)
```
