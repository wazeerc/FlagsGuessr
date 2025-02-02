import FlagsGuessr from './components/FlagsGuessr'
import { FlagsProvider } from './Context'
import './App.css'

const App = () => {
    return (
        <FlagsProvider>
            <FlagsGuessr />
        </FlagsProvider>
    )
}

export default App
