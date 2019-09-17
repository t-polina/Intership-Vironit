class UI {
    constructor() {
        this.dataListCountry = document.createElement('datalist');
        this.dataListCountry.id = 'list-country';

        this.dataListCity = document.createElement('datalist');
        this.dataListCity.id = 'list-city';

        this.inputCity = document.getElementById('input-city');
        this.inputCountry = document.getElementById('input-country');
    }
    createCityList(arr) {
        document.getElementById('view').append(this.dataListCity);
        for (let i = 0; i < arr.length; i++) {
            let op = document.createElement('option')
            op.setAttribute("value", arr[i])
            this.dataListCity.append(op)
        }
    }
    createList(arr) {
        document.getElementById('view').append(this.dataListCountry);
        for (let i = 0; i < arr.length; i++) {
            let op = document.createElement('option')
            op.setAttribute("value", arr[i])
            this.dataListCountry.append(op)
        }
    }
    clearCityList() {
        this.dataListCity.innerText=''
    }
    getWeatherType(){
        if(document.getElementById('current-weather').checked){
            return 'weather';
        }
        else if(document.getElementById('5days-weather').checked){
            return 'forecast';
        }
    }
    getCity() {
        return this.inputCity.value;
    }
    getCountry() {
        return this.inputCountry.value;
    }
    restCountryCity() {
        this.inputCountry.value = "";
        this.inputCity.value = "";
    }
}