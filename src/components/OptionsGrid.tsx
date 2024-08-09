import { countriesPool } from '../data/allCountries'
import { useFlagsContext } from '../Context'

interface ICountriesProps {
    countryName: string
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

interface IOptionsGridProps {
    sessionCountryName: string
}

interface IGuessesProps {
    guessesLeft: number
}

const CountriesOptions = (props: ICountriesProps) => {
    const { countryName, onClick } = props

    return (
        <>
            <button onClick={onClick}>{countryName}</button>
        </>
    )
}

export const NextButton = (props: any) => {
    const { nextFlag } = props
    return (
        <>
            <button className="next-button" onClick={nextFlag}>
                Refresh
            </button>
        </>
    )
}

const Guesses = (props: IGuessesProps) => {
    const { guessesLeft } = props

    return (
        <>
            <div className="guesses-container">
                {Array.from({ length: guessesLeft }).map((_, i) => (
                    <span key={i}>🌐</span>
                ))}
            </div>
        </>
    )
}

const OptionsGrid = () => {
    const { sessionCountry, lives, isSelectionCorrect, handleSelection } = useFlagsContext();

    const sessionPoolRaw = [...countriesPool, sessionCountry.name];
    const sessionPool = sessionPoolRaw.sort();

    return (
        <>
            <Guesses guessesLeft={lives} />
            <h4>
                {!isSelectionCorrect ? `You have ${lives} guesses left.` : ''}
            </h4>
            {!isSelectionCorrect ? (
                <div className="options-grid">
                    {sessionPool.map((country) => (
                        <CountriesOptions
                            key={country}
                            countryName={country}
                            onClick={() => handleSelection(country)}
                        />
                    ))}
                </div>
            ) : (
                <h3>
                    {lives === 0 ? '💀 You lost. ' : '😁 '}
                    This was {sessionCountry.name}'s flag!
                </h3>
            )}
        </>
    );
};

export default OptionsGrid;
