import { allCoutries } from "../data/allCountries";
import { getFlag } from "../utils/fetchData";

const CountriesGrid = () => {
  const sessionCountry = "mu"; // TODO: Get from store
  const sessionCountryFlag = getFlag(sessionCountry);

  const country = allCoutries[0];
  return (
    <>
      <h1>What flag is this?</h1>
      <section id="countries-grid">
        <img className="flag" alt={country} src={sessionCountryFlag}></img>
      </section>
    </>
  );
};

export default CountriesGrid;
