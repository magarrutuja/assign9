import React from "react";
import "./styles.css";
import { useState } from "react";

const listDB = {
  Punjabi: [
    {
      name: "Bahana",
      by: "Akull",
      time: "3min 35sec",
      type: "Single"
    },
    {
      name: "Sakhiyaan",
      by: "Maninder Buttar",
      time: "2min 59sec",
      type: "Single"
    },
    {
      name: "Gal Karke",
      by: "Inder Chahal",
      time: "2 min 53sec",
      type: "Single"
    },
    {
      name: "Baari",
      by: "Bilal Saeed, Momina Mustehsan",
      time: "3min 55sec",
      type: "Single"
    },
    {
      name: "Qismat",
      by: "Ammy Vrk",
      time: "4min 4sec",
      type: "Single"
    }
  ],

  Hindi: [
    {
      name: "Tera Bann jaunga",
      by: "Akhil Sachdeva, Tulsi Kumar",
      time: "3min 56sec",
      type: "Compilation"
    },
    {
      name: "Duniya ",
      by: "Akhil, Dhvanu Bhanushali, Abhijit Vaghani, Bob",
      time: "3min 42sec",
      type: "Single"
    },
    {
      name: "Ajab Si",
      by: "KK",
      time: "4min 2sec",
      type: "Album"
    },
    {
      name: "Mann Mera",
      by: "Gajendra Verma",
      time: "3min 18sec",
      type: "EP"
    },
    {
      name: "Chidiya",
      by: "Vilen",
      time: "4min 13sec",
      type: "Single"
    }
  ],
  English: [
    {
      name: "Perfect",
      by: "Ed Sheeran",
      time: "4min 23sec",
      type: "Album"
    },
    {
      name: "Moonlight",
      by: "Ali Gatie",
      time: "3min 48sec",
      type: "Album"
    },
    {
      name: "Mood",
      by: "24KGoln, iann dior",
      time: "2min 21sec",
      type: "Single"
    },
    {
      name: "Don't Let me down",
      by: "The Chainsmokers",
      time: "3min 28sec",
      type: "Single"
    },
    {
      name: "Faded",
      by: "Alan Walker",
      time: "3min 32sec",
      type: "Album"
    }
  ],
  Marathi: [
    {
      name: "Zingaat",
      by: "Ajay Gogavala, Atul Gogavala",
      time: "3min 46sec",
      type: "EP"
    },
    {
      name: "Radha hi Bawari",
      by: "Swapnil Bandodkar",
      time: "5min 13sec",
      type: "Album"
    },
    {
      name: "Mann Udhan Varyache",
      by: "Shankar Mahadevan",
      time: "4min 40sec",
      type: "EP"
    },
    {
      name: "Sairat Jhala Ji",
      by: "Chinmayi, Ajay Gogavala",
      time: "6min 10sec",
      type: "EP"
    },
    {
      name: "Shantabai",
      by: "Sanjay Londhe",
      time: "3min 29sec",
      type: "Album"
    }
  ]
};
export default function App() {
  const [selectlang, setlang] = useState("Punjabi");
  function listClickHandler(lang) {
    setlang(lang);
  }
  return (
    <div className="App">
      <h1 style={{ color: "white" }}>| Melomaniac |</h1>
      <p style={{ fontSize: "smaller", color: "white" }}>
        {" "}
        <h2>"Without music life would be a mistake"</h2>{" "}
      </p>

      <div>
        {Object.keys(listDB).map((lang) => (
          <button
            onClick={() => listClickHandler(lang)}
            style={{
              cursor: "pointer",
              background: "#6B7280",
              color: "#111827",
              fontWeight: "bold",
              color: "white",
              borderRadius: "1rem",
              padding: "0.5rem  1rem",
              border: "1px solid #374151",
              margin: "1rem 0.3rem"
            }}
          >
            {lang}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "center" }}>
        <ul style={{ paddingInlineStart: "0", textAlign: "center" }}>
          {listDB[selectlang].map((song) => (
            <li
              key={song.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "2px solid #E5E7EB",
                width: "80%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div
                style={{
                  fontSize: "larger",
                  padding: "0.5rem",
                  color: "white",
                  fontWeight: "bold"
                }}
              >
                {" "}
                {song.name}{" "}
              </div>
              <div
                style={{
                  fontSize: "smaller",
                  color: "white",
                  textAlign: "center",
                  padding: "0.5rem"
                }}
              >
                {" "}
                {song.by}{" "}
              </div>
              <div
                style={{
                  fontSize: "large",
                  color: "white",
                  textAlign: "center",
                  padding: "0.5rem"
                }}
              >
                {" "}
                {song.time}{" "}
                <div
                  style={{
                    fontSize: "small",
                    color: "white",
                    textAlign: "center",
                    padding: "0.5rem"
                  }}
                >
                  {" "}
                  {song.type}{" "}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
