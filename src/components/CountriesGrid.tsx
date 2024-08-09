import { useFlagsContext } from '../Context';
import { getFlag } from '../utils/fetchData';

const CountriesGrid = () => {
    const { sessionCountry } = useFlagsContext();
    const sessionCountryFlag = getFlag(sessionCountry.code.toLowerCase());

    return (
        <>
            <h1>What flag is this?</h1>
            <section className="countries-grid">
                <img
                    className="flag"
                    alt={sessionCountry.name}
                    src={sessionCountryFlag}
                />
            </section>
        </>
    );
};

export default CountriesGrid;
