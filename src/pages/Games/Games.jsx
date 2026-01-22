import useGames from "../../hooks/useGames";
import Filters from "../../components/Filter/Filter";
import GameCard from "../../components/GameCard/GameCard";
import Loader from "../../components/Loader/Loader";
import "./Games.css";

function Games() {
  const {
    games,
    loading,
    error,
    filters,
    updateFilters,
    clearFilters,
  } = useGames();

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <div className="page">{error}</div>;
  }

  return (
    <div className="games-page">
      <Filters
        filters={filters}
        onChange={updateFilters}
        onClear={clearFilters}
      />

      <div className="games-content">
        <h2>Video Games</h2>
        <p className="results-count">{games.length} results found</p>

        {games.length === 0 ? (
          <div className="no-results">No games found.</div>
        ) : (
          <div className="games-grid">
            {games.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Games;
