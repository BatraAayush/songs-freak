import React, { useEffect, useState } from "react";
import "./styles.css";

const songsDataBase = {
  punjabi: [
    {
      name: "Clash",
      rating: "9.0/10"
    },
    {
      name: "shadgi",
      rating: "9.1/10"
    },
    {
      name: "Adhiya",
      rating: "8/10"
    }
  ],
  bollywood: [
    {
      name: "Aabaad Barbaad ",
      rating: "9.5/10"
    },
    {
      name: "Jaan Ban Gaye",
      rating: "9.0/10"
    },
    {
      name: "Kuch To Hai",
      rating: "8.8/10"
    }
  ],
  hollywood: [
    {
      name: "Lonely",
      rating: "7.9/10"
    },
    {
      name: "Heather",
      rating: "8.5/10"
    },
    {
      name: "Dynamite",
      rating: "8.0/10"
    }
  ]
};

var songsDataBaseList = Object.keys(songsDataBase);

export default function App() {
  var [selectedGenre, setSelectedGenre] = useState("punjabi");

  function clickEventHandler(genre) {
    setSelectedGenre(genre);
  }

  return (
    <div className="App">
      <h1>SONGS FREAK 🎧</h1>
      <h2>Select a genre </h2>
      <div>
        {songsDataBaseList.map(function (genre) {
          return (
            <button key={genre} onClick={() => clickEventHandler(genre)}>
              {genre}
            </button>
          );
        })}
      </div>
      <hr />
      <ul>
        {songsDataBase[selectedGenre].map(function (song) {
          return (
            <li className="list" key={song.name}>
              <div className="name">{song.name}</div>
              <div>{song.rating}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
