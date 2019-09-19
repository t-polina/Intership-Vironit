let ui = new UI();
let nameCity = new ListCity();

(async function () {
    ui.createList(await nameCity.getCountryOb());
}())

document.getElementById('input-country').oninput = function () {
    let inputValue = ui.getCountry();
    let option = document.getElementById('list-country').childNodes;
    for (let i = 0; i < option.length; i++) {
        if (option[i].value === inputValue) {
            ui.clearCityList();
            ui.createCityList(nameCity.getCityArr(ui.getCountry()));
            break;
        }
    }
};


document.getElementById('input-city').oninput = async function () {
    let weatherRequest = new Request();
    let weatherUI = new WeatherUI();
    let weatherArr = [];
    let city = ui.getCity();
    let option = document.getElementById('list-city').childNodes;
    
    for (let i = 0; i < option.length; i++) {
        if (option[i].value === city) {
            weatherUI.removeContainer();
            ui.restCountryCity();
            let weatherOb = await weatherRequest.returnRequest(`https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/${ui.getWeatherType()}?q=${city}&APPID=8b8bf80f234143dbbbb50fdb4806a8c1`);
            if (ui.getWeatherType() === 'weather') {
                weatherUI.createContainerCurrentWeather(weatherOb.main.temp, weatherOb.main.humidity, weatherOb.wind.speed, weatherOb.weather[0].icon, weatherOb.weather[0].description, city)
            }
            else {
                for (let i = 0; i < weatherOb.list.length; i++) {
                    weatherArr.push(weatherOb.list[i].dt_txt);
                    weatherArr.push(weatherOb.list[i].weather[0].icon);
                    weatherArr.push(weatherOb.list[i].weather[0].description);
                    weatherArr.push(weatherOb.list[i].main.temp);
                    weatherArr.push(weatherOb.list[i].main.humidity);
                    weatherArr.push(weatherOb.list[i].wind.speed);
                }
                weatherUI.createContainer5DaysWeather(weatherArr, city)
            }
            break;
        }
    }
}; 