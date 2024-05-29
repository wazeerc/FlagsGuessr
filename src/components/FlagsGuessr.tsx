import CountriesGrid from "./CountriesGrid";
import Options from "./Options";

import "./styles/FlagsGuessr.css";

const FlagsGuessr = () => {
  return (
    <>
      <main className="flags-guessr-main">
        <CountriesGrid />
        <Options />
      </main>
    </>
  );
};

export default FlagsGuessr;
