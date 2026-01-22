import  useGames  from "../../hooks/useGames";

function Games() {
  const { games, loading, error } = useGames();
  console.log(games)
  if (loading) {
    return <div>Loading games</div>;
  }

  if (error) {
    return <div>Something went wrong</div>;
  }

  return (
    <div>
      <h1>Video Games</h1>
      <p>Total games: {games.length}</p> <br />
      {/* <div>
        {
          games.map((data,i)=>(
            <div key={data.id}>
              <h3>{data.id} . {data.attributes.name}</h3>
              <p>Rating: {data.attributes.rating}</p>
              <p>{data.attributes.firstReleaseDate}</p>
              <p>{data.attributes.createdAt}</p>
              <p>{data.attributes.updatedAt}</p>
              <p>{data.attributes.publishedAt}</p> <br />

            </div>
          ))
        }
      </div> */}
    </div>
  );
}

export default Games;
