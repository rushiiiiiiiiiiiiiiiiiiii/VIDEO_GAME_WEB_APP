import "./Filter.css";

function Filters() {
  return (
    <div className="filters">
      <h3>Filter Results</h3>

      <div className="filter-group">
        <label>Name (contains)</label>
        <input type="text" placeholder="Enter game name" />
      </div>

      <div className="filter-group">
        <label>Minimum Score</label>
        <input type="number" placeholder="1 - 10" />
      </div>

      <div className="filter-group">
        <label>Order By</label>
        <select>
          <option value="">Select</option>
          <option value="date">Release Date</option>
          <option value="score">Score</option>
          <option value="name">Name</option>
        </select>
      </div>

      <button className="clear-btn">Clear</button>
    </div>
  );
}

export default Filters;
