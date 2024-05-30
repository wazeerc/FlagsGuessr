import { ICountryNamesAndCode } from '../interfaces/CountriesModel'
import { getFlag } from '../utils/fetchData'

interface ICountriesGridProps {
    sessionCountry: ICountryNamesAndCode
}

const CountriesGrid = (props: ICountriesGridProps) => {
    const { sessionCountry } = props
    const sessionCountryFlag = getFlag(sessionCountry.code.toLowerCase())

    return (
        <>
            <h1>What flag is this?</h1>
            <section className="countries-grid">
                <img
                    className="flag"
                    alt={sessionCountry.name}
                    src={sessionCountryFlag}
                ></img>
            </section>
        </>
    )
}

export default CountriesGrid
