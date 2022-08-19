let favoriteCityId = "rome";
console.log(favoriteCityId);
favoriteCityId = "paris";
console.log(favoriteCityId);

const citiesId = ["paris", "nyc", "rome", "rio-de-janeiro"];
console.log(citiesId);
//citiesId = [];
citiesId.push("tokyo");
console.log(citiesId);

const getWeather = cityId =>
{
    let city = cityId.toUpperCase();
    let temperature = 20;

    return { // Automatic semicolon insertion forces us to place braces inline, or use a let declaration.
        city: city,
        temperature: temperature
    };
}
const weather = getWeather(favoriteCityId);
console.log(weather);

const { city, temperature } = weather;
console.log(city);
console.log(temperature);

const [parisId, nycId, ...otherCitiesId] = citiesId;
console.log(parisId);
console.log(nycId);
console.log(otherCitiesId.length);

class Trip
{
    constructor(id, name, imageUrl)
    {
        this.id = id;
        this.name = name;
        this.imageUrl = imageUrl;
    }

    get price() { return this._price; }
    set price(price) { this._price = price; }

    toString()
    {
        return `Trip [${this.id}, ${this.name}, ${this.imageUrl}, ${this._price}]`;
    }

    static getDefaultTrip()
    {
        return new Trip("rio-de-janeiro", "Rio de Janeiro", "img/rio-de-janeiro.jpg");
    }
}
let parisTrip = new Trip("paris", "Paris", "img/paris.jpg");
parisTrip.price = 100;
console.log(parisTrip);
console.log(parisTrip.name);
console.log(parisTrip.toString());

const defaultTrip = Trip.getDefaultTrip();
console.log(defaultTrip.toString());

class FreeTrip extends Trip
{
    constructor(id, name, imageUrl)
    {
        super(id, name, imageUrl);
        this.price = 0;
    }

    toString()
    {
        return "Free" + super.toString();
    }
}

const freeTrip = new FreeTrip("nantes", "Nantes", "img/nantes.jpg");
console.log(freeTrip);
console.log(freeTrip.toString());
