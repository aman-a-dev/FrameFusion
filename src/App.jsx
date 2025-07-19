import Favorites from "./pages/Favorites"
import Home from "./pages/Home"
import Notification from "./pages/Notification"
import { Routes, Route } from "react-router-dom"
import { MovieProvider } from "./contexts/MovieContext"
import NavBar from "./components/NavBar"

function App() {
    return (
        <MovieProvider>
            <NavBar />
            <main className="main-content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/favorites" element={<Favorites />} />
                    <Route path="/Notification" element={<Notification />} />
                </Routes>
            </main>
        </MovieProvider>
    )
}

export default App
