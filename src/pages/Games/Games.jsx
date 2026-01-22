import Filters from "../../components/Header/Filter/Filter";
import useGames from "../../hooks/useGames";
import "./Games.css";

function Games() {
  const { games, loading, error } = useGames();

  if (loading) {
    return <div className="page">Loading games...</div>;
  }

  if (error) {
    return <div className="page">Something went wrong.</div>;
  }

  return (
    <div className="games-page">
      <Filters/>

      <div className="games-content">
        <h2>Video Games</h2>
        <p>{games.length} results</p>

        {/* Game cards will go here later */}
        <div className="games-placeholder">
          Games list coming here…
        </div>
      </div>
    </div>
  );
}

export default Games;
