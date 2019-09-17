let ui = new UI();
let nameCity = new ListCity();

(async function () {
    ui.createList(await nameCity.getCountryOb());
}())

document.getElementById('input-country').addEventListener('keypress', function (e) {
    let key = e.which || e.keyCode;

    if (key === 13) {
        ui.clearCityList();
        ui.createCityList(nameCity.getCityArr(ui.getCountry()));
    }
});

document.getElementById('input-city').addEventListener('keypress', async function (e) {
    let weatherRequest = new Request();
    let weatherUI = new WeatherUI(); 
    let weatherArr = [];
    let key = e.which || e.keyCode;

    if (key === 13) {
        weatherUI.removeContainer();
        let city=ui.getCity();
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
       
    }
}); 