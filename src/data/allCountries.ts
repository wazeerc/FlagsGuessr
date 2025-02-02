import { iso31661 } from 'iso-3166';
import { ICountryNamesAndCode } from '../interfaces/CountriesModel';

const countryMap: Record<string, ICountryNamesAndCode> = {};
iso31661.forEach((country) => {
    countryMap[country.alpha2] = { name: country.name, code: country.alpha2 };
});

const countryNamesAndCode: ICountryNamesAndCode[] = Object.values(countryMap);
function getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let countriesPool: string[] = [];
const numberOfCountriesToSelect = 3;

while (countriesPool.length < numberOfCountriesToSelect) {
    const randomIndex = getRandomInt(0, countryNamesAndCode.length - 1);
    const randomCountry = countryNamesAndCode[randomIndex].name;
    if (!countriesPool.includes(randomCountry)) {
        countriesPool.push(randomCountry);
    }
}

export { countriesPool, countryNamesAndCode };

