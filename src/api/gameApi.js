const API_URL = "https://admin.edulatte.in/api/games";

export async function fetchGames() {
  const res = await fetch(API_URL);

  if (!res.ok) {
    throw new Error("Failed to fetch games");
  }

  const result = await res.json();
  
  return result.data;
}
