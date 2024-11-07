import { useEffect, useState } from "react";
import Signout from "./signOut";
const Home = () => {
    const [name, setName] = useState("");
    const [gifs, setGifs] = useState([]);   
  
    useEffect(() => {
      const fetchGifs = async () => {
        const response = await fetch(
          `https://api.giphy.com/v1/gifs/search?api_key=GlVGYHkr3WSBnllca54iNt0yFbjz7L65&q=${name}&limit=10`
        );
        const result = await response.json();
        setGifs(result.data);
      };
  
      fetchGifs();
  
    }, [name]);
  return (
    <>
      <Signout />
      <input
        type="text"
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Search for GIFs"
      />

      <div>
        {gifs.length > 0 ? (
          gifs.map((gif) => (
            <img
              key={gif.id}
              src={gif.images.fixed_height.url}
              alt={gif.title}
            />
          ))
        ) : (
          <p>No results found</p>
        )}
      </div>
    </>
  );
};

export default Home;
