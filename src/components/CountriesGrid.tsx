import { allCoutries } from "../data/allCountries";
import { countryFlag } from "../utils/dataFetching";

const CountriesGrid = () => {
  const country = allCoutries[0];
  const imgSrc = countryFlag(country);
  return (
    <>
      <h1>What flag is this?</h1>
      <section id="countries-grid">
        <img className="mu" alt={country} src={imgSrc}></img>
      </section>
    </>
  );
};

export default CountriesGrid;
