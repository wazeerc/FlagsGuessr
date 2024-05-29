import React, { useEffect, useState } from "react";

interface ICountries {
  countryName: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const CountriesOptions = (props: ICountries) => {
  const { countryName, onClick } = props;

  return (
    <>
      <button onClick={onClick}>{countryName}</button>
    </>
  );
};

const OptionsGrid = () => {
  const [selection, setSelection] = useState<string | null>(null);
  const [isSelectionCorrect, setIsSelectionCorrect] = useState<boolean>(false);
  const [emoji, setEmoji] = useState<string>("🌐");

  const tempOptions = ["Mauritius", "Australia", "France", "England"];

  useEffect(() => {
    if (selection === "Mauritius") {
      setIsSelectionCorrect(true);
      setEmoji("🤗");
    }
  }, [selection]);

  const handleCountrySelection = (selectedCountry: string) => {
    if (!isSelectionCorrect) {
      setSelection(selectedCountry);
    }
  };

  return (
    <>
      <h2>{emoji}</h2>
      {!isSelectionCorrect ? (
        <div className="options-grid">
          {tempOptions.map((country) => (
            <CountriesOptions
              key={country}
              countryName={country}
              onClick={() => {
                handleCountrySelection(country);
                if (selection !== "Mauritius") setEmoji("😱");
              }}
            />
          ))}
        </div>
      ) : (
        <h3>Indeed, this is the Mauritian flag!</h3>
      )}
    </>
  );
};

export default OptionsGrid;
