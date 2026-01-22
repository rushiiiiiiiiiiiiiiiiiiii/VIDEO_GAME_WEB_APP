import "./GameCard.css";

function GameCard({ game }) {
  const { name, rating, summary, firstReleaseDate } = game.attributes;

  return (
    <div className="game-card">
      <div className="game-card-header">
        <h4>{name}</h4>
        <span className="rating">{Math.round(Number(rating))}</span>
      </div>

      <p className="release-date">
        Release Date:{" "}
        {firstReleaseDate
          ? new Date(firstReleaseDate).toLocaleDateString("en-GB")
          : "N/A"}
      </p>

      <p className="summary">{summary || "No Summary available"}</p>
    </div>
  );
}

export default GameCard;
