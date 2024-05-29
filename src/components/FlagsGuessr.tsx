import { allCoutries } from "../data/allCountries";
import { countryFlag } from "../utils/dataFetching";

const FlagsGuessr = () => {
  const country = allCoutries[0];
  const imgSrc = countryFlag(country);
  return (
    <>
      <main>
        <img alt={country} src={imgSrc}></img>
      </main>
    </>
  );
};

export default FlagsGuessr;
