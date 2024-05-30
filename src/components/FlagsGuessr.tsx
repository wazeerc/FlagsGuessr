import { countryNamesAndCode } from '../data/allCountries'
import CountriesGrid from './CountriesGrid'
import OptionsGrid, { NextButton } from './OptionsGrid'

import './styles/FlagsGuessr.css'

const FlagsGuessr = () => {
    const sessionCountry =
        countryNamesAndCode[
            Math.floor(Math.random() * countryNamesAndCode.length)
        ]

    return (
        <>
            <main className="flags-guessr-main">
                <CountriesGrid sessionCountry={sessionCountry} />
                <OptionsGrid sessionCountryName={sessionCountry.name} />
                <NextButton nextFlag={() => window.location.reload()} />
            </main>
        </>
    )
}

export default FlagsGuessr
