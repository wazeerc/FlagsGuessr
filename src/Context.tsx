import { createContext, useState, useContext } from 'react';
import { countryNamesAndCode } from './data/allCountries';

const LIVES: number = 3;

const FlagsContext = createContext(
    {
        sessionCountry: countryNamesAndCode[Math.floor(Math.random() * countryNamesAndCode.length)],
        lives: LIVES,
        selection: null,
        isSelectionCorrect: false,
        handleNextFlag: () => {},
        handleSelection: (country: string) => {}
    }
);

export const useFlagsContext = () => useContext(FlagsContext);

interface IFlagsContextProps {
    children: React.ReactNode;
}

export const FlagsProvider = ({ children }: IFlagsContextProps) => {
    const [sessionCountry, setSessionCountry] = useState(
        countryNamesAndCode[Math.floor(Math.random() * countryNamesAndCode.length)]
    );
    const [lives, setLives] = useState(LIVES);
    const [selection, setSelection] = useState(null);
    const [isSelectionCorrect, setIsSelectionCorrect] = useState(false);

    const handleNextFlag = () => {
        setSessionCountry(
            countryNamesAndCode[Math.floor(Math.random() * countryNamesAndCode.length)]
        );
        setLives(LIVES);
        setSelection(null);
        setIsSelectionCorrect(false);
    };

    const handleSelection = (selectedCountry: any) => {
        if (!isSelectionCorrect) {
            setSelection(selectedCountry);
            if (selectedCountry === sessionCountry.name) {
                setIsSelectionCorrect(true);
            } else {
                setLives(prevLives => prevLives - 1);
                if (lives === 1) {
                    setIsSelectionCorrect(true);
                }
            }
        }
    };

    return (
        <FlagsContext.Provider
            value={{
                sessionCountry,
                lives,
                selection,
                isSelectionCorrect,
                handleNextFlag,
                handleSelection
            }}
        >
            {children}
        </FlagsContext.Provider>
    );
};
