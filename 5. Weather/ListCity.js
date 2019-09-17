class ListCity {
    constructor() {
        this.country = [];
        this.url='https://raw.githubusercontent.com/russ666/all-countries-and-cities-json/master/countries.json'
        this.request=new Request()
    }
    async getCountryOb() {
        ListCity.countryOb = await this.request.returnRequest(this.url);
        for (let key in ListCity.countryOb) {
            this.country.push(key);
        }
        return this.country;
    }
    getCityArr(country) {
        return ListCity.countryOb[country];
    }
}
ListCity.countryOb;