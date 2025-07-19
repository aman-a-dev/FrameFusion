import MovieCard from "../components/MovieCard"
import Pc from "../components/Pc"
import Loader from "../components/Loader"
import Loyer from "../components/Loyer"
import { useState, useEffect } from "react"
import { searchMovies, getPopularMovies } from "../services/api"
import "../css/Home.css"

function Home() {
    const [searchQuery, setSearchQuery] = useState("")
    const [movies, setMovies] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    const [loyer, setLoyer] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoyer(false)
        }, 1200)
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies()
                setMovies(popularMovies)
            } catch (err) {
                console.log(err)
                setError("Failed to load movies...")
            } finally {
                setLoading(false)
            }
        }

        loadPopularMovies()
    }, [])

    const handleSearch = async e => {
        e.preventDefault()
        if (!searchQuery.trim()) return
        if (loading) return

        setLoading(true)
        try {
            const searchResults = await searchMovies(searchQuery)
            setMovies(searchResults)
            setError(null)
        } catch (err) {
            console.log(err)
            setError("Failed to search movies...")
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="home">
            <Loyer styles={{ transform: loyer ? "" : "translateX(-100%)" }} />
            <HeroSection />
            <form onSubmit={handleSearch} className="search-form">
                <input
                    type="text"
                    placeholder="Search for movies..."
                    className="search-input"
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="search-button">
                    <i class="fas fa-search"></i>
                </button>
            </form>
            <div class="content">
                {error && <div className="error-message">{error}</div>}

                {loading ? (
                    <Loader />
                ) : (
                    <div className="movies-grid">
                        {movies.map(movie => (
                            <MovieCard movie={movie} key={movie.id} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Home

function HeroSection() {
    return (
        <div class="hero-section">
            <div className="txt-box">
                <GradientText>FrameFusion</GradientText>
                <p>Duscover new and popular movies in on place 🎬. </p>
                <button>Let's go</button>
            </div>
            <Pc />
        </div>
    )
}
function GradientText({
    children,
    className = "GradientText",
    colors = ["#d17842", "#ff873f", "#ffc8a8", "#d17842"],
    animationSpeed = 3,
    showBorder = false
}) {
    const gradientStyle = {
        backgroundImage: `linear-gradient(to right, ${colors.join(", ")})`,
        animationDuration: `${animationSpeed}s`
    }

    return (
        <div className={`animated-gradient-text ${className}`}>
            {showBorder && (
                <div className="gradient-overlay" style={gradientStyle}></div>
            )}
            <div className="text-content" style={gradientStyle}>
                {children}
            </div>
        </div>
    )
}
