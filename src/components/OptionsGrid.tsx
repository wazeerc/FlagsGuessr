import React, { useEffect, useState } from 'react'
import { countriesPool } from '../data/allCountries'

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

const OptionsGrid = (props: IOptionsGridProps) => {
    const { sessionCountryName } = props

    const [selection, setSelection] = useState<string | null>(null)
    const [isSelectionCorrect, setIsSelectionCorrect] = useState<boolean>(false)

    const [lives, setLives] = useState<number>(4)

    const sessionPoolRaw = [...countriesPool, sessionCountryName]
    const sessionPool = sessionPoolRaw.sort()

    useEffect(() => {
        if (selection === sessionCountryName) {
            setIsSelectionCorrect(true)
        } else {
            setLives(lives - 1)
        }
        if (lives === 1) {
            setIsSelectionCorrect(true)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [selection])

    const handleCountrySelection = (selectedCountry: string) => {
        if (!isSelectionCorrect) {
            setSelection(selectedCountry)
        }
    }

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
                            onClick={() => {
                                handleCountrySelection(country)
                            }}
                        />
                    ))}
                </div>
            ) : (
                <h3>
                    {lives === 0 ? '💀 You lost. ' : '😁 '}
                    This was {sessionCountryName}'s flag!{' '}
                </h3>
            )}
        </>
    )
}

export default OptionsGrid
