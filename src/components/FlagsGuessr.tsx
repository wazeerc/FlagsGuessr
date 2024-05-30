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
            <div className="flags-guessr-container">
                <main className="flags-guessr-main">
                    <CountriesGrid sessionCountry={sessionCountry} />
                    <OptionsGrid sessionCountryName={sessionCountry.name} />
                    <NextButton nextFlag={() => window.location.reload()} />
                </main>
                <footer>
                    Thanks for playing! Contribute to the&nbsp;
                    <a
                        href="https://github.com/wchadwick/flags-guessr"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub repository
                    </a>
                    🫡
                </footer>
            </div>
        </>
    )
}

export default FlagsGuessr
