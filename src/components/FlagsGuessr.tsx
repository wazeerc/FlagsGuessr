import { useEffect } from "react";
import CountriesGrid from "./CountriesGrid";
import OptionsGrid from "./OptionsGrid";

import "./styles/FlagsGuessr.css";

const FlagsGuessr = () => {
  useEffect(() => {
    //TODO: dispatch country to store
  }, []);

  return (
    <>
      <main className="flags-guessr-main">
        <CountriesGrid />
        <OptionsGrid />
      </main>
    </>
  );
};

export default FlagsGuessr;
