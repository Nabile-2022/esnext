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

class TripService
{
    constructor()
    {
        this.trips = new Set();
        this.trips.add(new Trip('paris', 'Paris', 'img/paris.jpg'));
        this.trips.add(new Trip('nantes', 'Nantes', 'img/nantes.jpg'));
        this.trips.add(new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg'));
    }

    findByName(tripName)
    {
        return new Promise((resolve, reject) =>
        {
            setTimeout(() =>
            {
                for (const trip of this.trips.entries())
                {
                    if (trip[1].name == tripName)
                        return resolve(trip[1]);
                }
                
                return reject(`No trip with name ${tripName}`);
            }, 2000)
        });
    }
}
class PriceService
{
    constructor()
    {
        this.trips = new Map();
        this.trips.set('paris', 100);
        this.trips.set('rio-de-janeiro', 800);
    }
    findPriceByTripId(tripId)
    {
        return new Promise((resolve, reject) =>
        {
            setTimeout(() =>
            {
                const trip = this.trips.get(tripId);

                if (trip != undefined)
                    return resolve(trip);
                else
                    return reject(`No price found for id ${tripId}`);
            }, 2000)
        });
    }
}

let tripService = new TripService();
let priceService = new PriceService();

tripService.findByName('Paris').then(t => console.log('Trip found : ' + t));
tripService.findByName('Toulouse').catch(r => console.log(r));
tripService.findByName('Rio de Janeiro').then(t => priceService.findPriceByTripId(t.id).then(p => console.log('Price found : ' + p)));
tripService.findByName('Nantes').then(t => priceService.findPriceByTripId(t.id).then(p => console.log('Price found : ' + p))).catch(r => console.log(r));
