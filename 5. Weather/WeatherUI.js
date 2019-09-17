class WeatherUI {
    createContainerCurrentWeather(temp, humidity, wind, icon, description, cityName) {
        this.containerCurrentWeather = document.createElement('div');
        this.containerCurrentWeather.id = 'container-current-weather';
        document.getElementById('view').append(this.containerCurrentWeather);

        this.outputCityName = document.createElement('p');
        this.outputCityName.innerText = cityName;
        this.outputCityName.id = "output-city-name"

        this.outputDescription = document.createElement('p');
        this.outputDescription.id = "description"
        this.outputDescription.innerText = description;


        this.outputTemp = document.createElement('p');
        this.outputTemp.innerText = `Temperature: ${~~temp - 273} ℃`

        this.outputHumidity = document.createElement('p');
        this.outputHumidity.innerText = `Humidity: ${humidity} %`

        this.outputWind = document.createElement('p');
        this.outputWind.innerText = `Wind: ${wind} m/s`

        this.outputIcon = document.createElement('img');
        this.outputIcon.setAttribute('src', `http://openweathermap.org/img/wn/${icon}@2x.png`);

        this.containerCurrentWeather.append(this.outputCityName);
        this.containerCurrentWeather.append(this.outputIcon);
        this.containerCurrentWeather.append(this.outputDescription);
        this.containerCurrentWeather.append(this.outputTemp);
        this.containerCurrentWeather.append(this.outputHumidity);
        this.containerCurrentWeather.append(this.outputWind);

    }
    createContainer5DaysWeather(arr, city) {
        this.container5DaysWeather = document.createElement('div');
        this.container5DaysWeather.id = 'container-current-weather';
        document.getElementById('view').append(this.container5DaysWeather);

        this.outputCityName = document.createElement('p');
        this.outputCityName.innerText = city;
        this.outputCityName.id = "output-city-name";

        this.weatherTabel = document.createElement('table');
        this.tabelFirstRow = document.createElement('tr');
        this.thTime = document.createElement('th');
        this.thTime.innerText = "Time"
        this.thIcon = document.createElement('th');
        this.thIcon.innerText = "Icon"
        this.thDescription = document.createElement('th');
        this.thDescription.innerText = "Description"
        this.thTemp = document.createElement('th');
        this.thTemp.innerText = "Tepm"
        this.thHumidity = document.createElement('th');
        this.thHumidity.innerText = "Humidity"
        this.thWind = document.createElement('th');
        this.thWind.innerText = "Wind"

        this.weatherTabel.append(this.tabelFirstRow);
        this.tabelFirstRow.append(this.thTime);
        this.tabelFirstRow.append(this.thIcon);
        this.tabelFirstRow.append(this.thDescription);
        this.tabelFirstRow.append(this.thTemp);
        this.tabelFirstRow.append(this.thHumidity);
        this.tabelFirstRow.append(this.thWind);


        for (let i = 0; i < arr.length; i += 6) {
            this.weatherTabel.append(this.createRow(arr.slice(i, i + 6)));
        }
        document.getElementById('view').append(this.container5DaysWeather);
        this.container5DaysWeather.append(this.outputCityName);
        this.container5DaysWeather.append(this.weatherTabel);


    }
    createRow(arr) {
        this.tabelRow = document.createElement('tr');
        this.tdTime = document.createElement('td');
        this.tdTime.innerText = arr[0].substring(5,16);
        this.tdIcon = document.createElement('td');
        this.icon = document.createElement('img');
        this.tdIcon.append(this.icon)
        this.icon.setAttribute('src', `http://openweathermap.org/img/wn/${arr[1]}.png`);
        this.tdDescription = document.createElement('td');
        this.tdDescription.innerText = arr[2];
        this.tdTemp = document.createElement('td');
        this.tdTemp.innerText = arr[3];
        this.tdHumidity = document.createElement('td');
        this.tdHumidity.innerText = arr[4];
        this.tdWind = document.createElement('td');
        this.tdWind.innerText = arr[5];

        this.tabelRow.append(this.tdTime);
        this.tabelRow.append(this.tdIcon);
        this.tabelRow.append(this.tdDescription);
        this.tabelRow.append(this.tdTemp);
        this.tabelRow.append(this.tdHumidity);
        this.tabelRow.append(this.tdWind);
        return this.tabelRow;

    }
    removeContainer() {
        if (document.getElementById("container-current-weather")) {
            document.getElementById("container-current-weather").remove();
        }
    }
}