
import React, { useEffect } from "react";
import Login from "./Login";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from "./DataLayer";
import Player from "./Player";
import "./App.css"

const spotify = new SpotifyWebApi();

function App() {
  const [{ token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      spotify.setAccessToken(_token);

      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });
      // Inside App.js useEffect
      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });


      // Fetch user playlists
      spotify.getUserPlaylists()
        .then((playlists) => {
          console.log("[Fetched Playlists]", playlists);
          dispatch({
            type: "SET_PLAYLISTS",
            playlists,
          });
        })
        .catch((error) => {
          console.error("Failed to fetch playlists:", error);
        });

      // Fetch Discover Weekly (or another specific playlist)
      const playlistId = "3cEYpjA9oz9GiPac4AsH4n"; // Correct playlist ID
      spotify.getPlaylist(playlistId, { market: "ES" })
        .then((playlist) => {
          dispatch({
            type: "SET_DISCOVER_WEEKLY",
            discover_weekly: playlist,
          });
        })
        .catch((error) => {
          console.error("Failed to fetch playlist:", error);
        });
    }
  }, [dispatch]);

  return (
    <div className="App">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
