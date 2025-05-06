import { useState } from 'react'
import Search from "./components/Search.jsx";

const App = () => {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <main>
            <div className="pattern" />
            <div className="wrapper">
                <header>
                    <img src="/public/hero.png" alt="Hero Banner"/>
                    <h1>Find <span className="text-gradient">Movies</span> You'll Enjoy Without the Hassle</h1>
                </header>
            </div>
            <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </main>
    )
}
export default App
