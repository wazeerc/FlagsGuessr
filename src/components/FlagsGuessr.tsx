import { useFlagsContext } from '../Context'
import CountriesGrid from './CountriesGrid'
import OptionsGrid, { NextButton } from './OptionsGrid'

import './styles/FlagsGuessr.css'

const FlagsGuessr = () => {
    const { handleNextFlag } = useFlagsContext()

    return (
        <div className="flags-guessr-container">
            <main className="flags-guessr-main">
                <CountriesGrid />
                <OptionsGrid />
                <NextButton nextFlag={handleNextFlag} />
            </main>
            <footer>
                Thanks for playing! Contribute to the&nbsp;
                <a
                    href="https://github.com/wazeerc/FlagsGuessr"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    GitHub repository
                </a>
                🫡
            </footer>
        </div>
    )
}

export default FlagsGuessr
