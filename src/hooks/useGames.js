import { useEffect, useState } from "react";
import { fetchGames } from "../api/gameApi";

function useGames() {
  const [allGames, setAllGames] = useState([]);
  const [filteredGames, setFilteredGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [filters, setFilters] = useState({
    name: "",
    minScore: "",
    orderBy: "",
  });

  useEffect(() => {
    async function loadGames() {
      try {
        const data = await fetchGames();
        setAllGames(data);
        setFilteredGames(data);
      } catch (err) {
        setError("Failed to load games");
      } finally {
        setLoading(false);
      }
    }

    loadGames();
  }, []);

  useEffect(() => {
    let result = [...allGames];

    // filter by name
    if (filters.name) {
      result = result.filter((game) =>
        game.attributes.name
          .toLowerCase()
          .includes(filters.name.toLowerCase())
      );
    }

    // filter by score
    if (filters.minScore) {
      result = result.filter(
        (game) => Number(game.attributes.rating) >= filters.minScore
      );
    }

    // sorting
    if (filters.orderBy === "name") {
      result.sort((a, b) =>
        a.attributes.name.localeCompare(b.attributes.name)
      );
    }

    if (filters.orderBy === "score") {
      result.sort(
        (a, b) =>
          Number(b.attributes.rating) - Number(a.attributes.rating)
      );
    }

    if (filters.orderBy === "date") {
      result.sort(
        (a, b) =>
          Number(b.attributes.firstReleaseDate) -
          Number(a.attributes.firstReleaseDate)
      );
    }

    setFilteredGames(result);
  }, [filters, allGames]);

  function updateFilters(key, value) {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  }

  function clearFilters() {
    setFilters({
      name: "",
      minScore: "",
      orderBy: "",
    });
    setFilteredGames(allGames);
  }

  return {
    games: filteredGames,
    loading,
    error,
    filters,
    updateFilters,
    clearFilters,
  };
}

export default useGames;
