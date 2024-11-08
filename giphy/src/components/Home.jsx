import { useEffect, useState } from "react";
import Signout from "./signOut";
import "./Home.css";
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
      <div className="container">
        <header className="header">
          <div className="header-content">
            <Signout />
            <input
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Search for GIFs"
              className="search-input"
            />
          </div>
        </header>

        <main className="main-content">
          {gifs.length === 0 ? (
            <p className="no-results">
              No results found.
            </p>
          ) : (
            <div className="image-grid">
              {gifs.map((gif) => (
                <div key={gif.id} className="image-card">
                  <div className="image-card-content">
                    <img
                      key={gif.id}
                      src={gif.images.fixed_height.url}
                      alt={gif.title}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>
    </>
  );
};

export default Home;
