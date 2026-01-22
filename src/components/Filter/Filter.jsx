import "./Filter.css";

function Filters({ filters, onChange, onClear }) {
  return (
    <div className="filters">
      <h3>Filter Results</h3>

      <div className="filter-group">
        <label>Name (contains)</label>
        <input
          type="text"
          value={filters.name}
          onChange={(e) => onChange("name", e.target.value)}
          placeholder="Enter game name"
        />
      </div>

      <div className="filter-group">
        <label>Minimum Score</label>
        <input
          type="number"
          min="1"
          max="10"
          value={filters.minScore}
          onChange={(e) => onChange("minScore", e.target.value)}
          placeholder="1 - 10"
        />
      </div>

      <div className="filter-group">
        <label>Order By</label>
        <select
          value={filters.orderBy}
          onChange={(e) => onChange("orderBy", e.target.value)}
        >
          <option value="">Select</option>
          <option value="date">Release Date</option>
          <option value="score">Score</option>
          <option value="name">Name</option>
        </select>
      </div>

      <button className="clear-btn" onClick={onClear}>
        Clear
      </button>
    </div>
  );
}

export default Filters;
