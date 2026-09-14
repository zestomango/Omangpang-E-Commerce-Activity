import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
import { useGameContext } from "../context/GameContext";
import "../css/Register.css";

const Landing = () => {
  const { userData } = useUser();
  const { games: mockGames } = useGameContext();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedGenres, setSelectedGenres] = useState({});

  const handleSearch = (e) => {
    e.preventDefault();
  };

  const filteredGames = mockGames.filter((game) => {
    const searchLower = searchQuery.toLowerCase();
    const matchesSearch = 
      game.title.toLowerCase().includes(searchLower) ||
      game.genre.toLowerCase().includes(searchLower);

    const activeGenres = Object.keys(selectedGenres).filter(g => selectedGenres[g]);
    const matchesGenre = activeGenres.length === 0 || activeGenres.some(g => game.genre.includes(g));

    return matchesSearch && matchesGenre;
  });

  const handleGenreChange = (e) => {
    setSelectedGenres({
      ...selectedGenres,
      [e.target.name]: e.target.checked,
    });
  };

  const genres = [
    "Action",
    "Anime",
    "Adventure",
    "RPG",
    "Indie",
    "Platformer",
    "Casual",
  ];

  return (
    <div
      style={{
        padding: "3rem 2rem",
        color: "#c6d4df",
        minHeight: "calc(100vh - 72px)",
        background:
          "linear-gradient(to bottom right, #ffffff 0%, #cfd8dc 100%)",
      }}
    >
      <div style={{ width: "100%" }}>
        <div style={{ display: "flex", gap: "2rem", alignItems: "flex-start" }}>
          <div
            style={{
              width: "250px",
              background: "#171a21",
              padding: "1.5rem",
              borderRadius: "4px",
              border: "1px solid rgba(255, 255, 255, 0.05)",
              boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
              flexShrink: 0,
            }}
          >
            <h3
              style={{
                margin: "0 0 1.5rem 0",
                color: "#ffffff",
                fontSize: "1.1rem",
                textTransform: "uppercase",
                letterSpacing: "1px",
                fontWeight: "normal",
              }}
            >
              Browse by Category
            </h3>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.8rem",
              }}
            >
              {genres.map((genre) => (
                <label
                  key={genre}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.6rem",
                    cursor: "pointer",
                    color: "#c6d4df",
                    fontSize: "1rem",
                  }}
                >
                  <input
                    type="checkbox"
                    name={genre}
                    checked={selectedGenres[genre] || false}
                    onChange={handleGenreChange}
                    style={{
                      cursor: "pointer",
                      accentColor: "#2796c9",
                      width: "16px",
                      height: "16px",
                    }}
                  />
                  {genre}
                </label>
              ))}
            </div>
          </div>

          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
            }}
          >
            <form
              onSubmit={handleSearch}
              style={{ display: "flex", gap: "0.5rem", width: "100%" }}
            >
              <input
                type="text"
                placeholder="Search for games, software, or categories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  flex: 1,
                  padding: "1rem 1.5rem",
                  border: "1px solid #171a21",
                  borderRadius: "4px",
                  background: "#171a21",
                  color: "#ffffff",
                  fontSize: "1.1rem",
                  outline: "none",
                  transition: "all 0.3s ease",
                  boxShadow: "inset 0 2px 4px rgba(0,0,0,0.2)",
                }}
                onFocus={(e) => {
                  e.target.style.boxShadow =
                    "0 0 0 1px rgba(102, 192, 244, 0.5)";
                  e.target.style.borderColor = "#66c0f4";
                  e.target.style.background = "#394857";
                }}
                onBlur={(e) => {
                  e.target.style.boxShadow = "inset 0 2px 4px rgba(0,0,0,0.2)";
                  e.target.style.borderColor = "#171a21";
                  e.target.style.background = "#171a21";
                }}
              />

              <button
                type="submit"
                style={{
                  padding: "0 3rem",
                  border: "none",
                  borderRadius: "4px",
                  background:
                    "linear-gradient(135deg, #2796c9 0%, #1b6389 100%)",
                  color: "#ffffff",
                  fontWeight: "600",
                  fontSize: "1.1rem",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                }}
                onMouseOver={(e) =>
                  (e.target.style.background =
                    "linear-gradient(135deg, #3bb3eb 0%, #227ca8 100%)")
                }
                onMouseOut={(e) =>
                  (e.target.style.background =
                    "linear-gradient(135deg, #2796c9 0%, #1b6389 100%)")
                }
              >
                Search
              </button>
            </form>

            <div
              style={{
                flex: 1,
                display: "grid",
                gridTemplateColumns: "repeat(5, 1fr)",
                gap: "1.5rem",
              }}
            >
              {filteredGames.length > 0 ? (
                filteredGames.map((game) => (
                <div
                  key={game.id}
                  onClick={() => navigate(`/view-game/${game.id}`)}
                  style={{
                    background: "#171a21",
                    boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
                    transition: "transform 0.2s ease, box-shadow 0.2s ease",
                    cursor: "pointer",
                    display: "flex",
                    flexDirection: "column",
                    height: "320px",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={game.image}
                    alt={game.title}
                    style={{
                      width: "100%",
                      aspectRatio: "16 / 9",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                  <div
                    style={{
                      padding: "1rem",
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                      minWidth: 0,
                    }}
                  >
                    <h4
                      style={{
                        color: "#ffffff",
                        margin: "0 0 0.5rem 0",
                        fontSize: "1.1rem",
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {game.title}
                    </h4>
                    <div
                      style={{
                        color: "#ffffffff",
                        fontSize: "0.85rem",
                        marginBottom: "1rem",
                        flex: 1,
                      }}
                    >
                      {game.genre}
                    </div>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <span style={{ color: "#2cc52cde", fontWeight: "bold" }}>
                        {game.price}
                      </span>
                    </div>
                  </div>
                </div>
              ))
              ) : (
                <div style={{ color: "#020202ff", gridColumn: "1 / -1", textAlign: "center", padding: "2rem" }}>
                  No games found matching your search.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
