const apiKey = "8d05ffb75ecbf746ffc119d5b3f713bf";

document.getElementById("weatherForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    const city = document.getElementById("cityInput").value.trim();
    const result = document.getElementById("result");

    if (city === "") {
        result.innerHTML = "Please enter city name";
        return;
    }

    result.innerHTML = "Loading...";

    try {
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);

        const data = await res.json();

        if (Number(data.cod) !== 200) {
            result.innerHTML = "City not found";
            return;
        }

        result.innerHTML = `
            <h2> ${data.name}</h2>
            <p> Temperature: ${Math.round(data.main.temp)}°C</p>
            <p> Weather  Status: ${data.weather[0].description}</p>
            <p> Humidity Level: ${data.main.humidity}%</p>
            <p> Air Speed: ${Math.round(data.wind.speed)} km/h</p>
        `;

    } catch (error) {
        result.innerHTML = "Error loading weather";
    }
});


// Current Location Weather

document.getElementById("locationbtn").addEventListener("click", () => {

    const result = document.getElementById("result");

    if (!navigator.geolocation) {
        result.innerHTML = "Location not supported";
        return;
    }

    result.innerHTML = "Loadding your location..........";

    navigator.geolocation.getCurrentPosition(async (position) => {

        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        try {

            const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`);

            const data = await res.json();

            result.innerHTML = `
                <h2>${data.name}</h2>
                <p>Temperature: ${Math.round(data.main.temp)}°C</p>
                <p>Weather  Status: ${data.weather[0].description}</p>
                <p>Humidity Level: ${data.main.humidity}%</p>
                <p>Air Speed: ${Math.round(data.wind.speed)} km/h</p>
            `;

        } catch (error) {
            result.innerHTML = "Error loading weather";
        }

    }, () => {
        result.innerHTML = "Unable to get your location";
    });

});
