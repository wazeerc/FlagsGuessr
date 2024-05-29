import React, { useEffect, useState } from 'react'
import { countriesPool } from '../data/allCountries'

interface ICountriesProps {
    countryName: string
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

interface IOptionsGridProps {
    sessionCountryName: string
}

const CountriesOptions = (props: ICountriesProps) => {
    const { countryName, onClick } = props

    return (
        <>
            <button onClick={onClick}>{countryName}</button>
        </>
    )
}

const OptionsGrid = (props: IOptionsGridProps) => {
    const { sessionCountryName } = props

    const [selection, setSelection] = useState<string | null>(null)
    const [isSelectionCorrect, setIsSelectionCorrect] = useState<boolean>(false)
    const [emoji, setEmoji] = useState<string>('🌐')

    const sessionPoolRaw = [...countriesPool, sessionCountryName]
    const sessionPool = sessionPoolRaw.sort()

    useEffect(() => {
        if (selection === sessionCountryName) {
            setIsSelectionCorrect(true)
            setEmoji('🤗')
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
            <h2>{emoji}</h2>
            {!isSelectionCorrect ? (
                <div className="options-grid">
                    {sessionPool.map((country) => (
                        <CountriesOptions
                            key={country}
                            countryName={country}
                            onClick={() => {
                                handleCountrySelection(country)
                                if (selection !== 'Mauritius') setEmoji('😱')
                            }}
                        />
                    ))}
                </div>
            ) : (
                <h3>Indeed, this is {sessionCountryName}'s flag!</h3>
            )}
        </>
    )
}

export default OptionsGrid
