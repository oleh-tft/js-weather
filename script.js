const apiKey = 'd77e8a80bfcc7551c3135a39d716ce92';
let table = document.querySelector("#weather");
let btn = document.querySelector("#add");
let city = document.querySelector("#textCity");

function addCity() {
    if (city.value == "") return;
    table.removeAttribute("style");
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${apiKey}&units=metric&lang=uk`;
    
    fetch(url).then(response => response.json()).then(json => {
        console.log(json);
        const icon = json.weather[0].icon;
        let tr = document.createElement("tr");
        tr.innerHTML += `<td>${json.name}</td>`;
        tr.innerHTML += `<td>${json.main.temp}°C</td>`;
        tr.innerHTML += `<td>${json.main.feels_like}°C</td>`;
        tr.innerHTML += `<td class="desc"><img src="https://openweathermap.org/img/wn/${icon}.png">${json.weather[0].description}</td>`;
        tr.innerHTML += `<td>${json.main.humidity}%</td>`;
        tr.innerHTML += `<td>${new Date(json.sys.sunrise).toLocaleTimeString("uk-UA")}</td>`;
        table.append(tr);
    });
}

btn.addEventListener("click", addCity);