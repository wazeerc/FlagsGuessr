import { countryNamesAndCode } from '../data/allCountries';

export function generateRandomOptions(correctAnswer: string): string[] {
  const numberOfOptions = 4;
  const options = new Set<string>([correctAnswer]);

  while (options.size < numberOfOptions) {
    const randomCountry = countryNamesAndCode[Math.floor(Math.random() * countryNamesAndCode.length)].name;
    options.add(randomCountry);
  }

  return Array.from(options).sort(() => Math.random() - 0.5);
}
