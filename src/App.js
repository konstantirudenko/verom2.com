import React from "react";
import './App.css';

function App() {
  const text = "monix and maryan ";

  const goToSite = () => {
    window.location.href = "https://theannoyingsite.com";
  };

  return (
    <div style={styles.body}>
      {/* Glitch title */}
      <h1 style={styles.glitch}>HACKED</h1>

      {/* Button */}
      <button onClick={goToSite} style={styles.button}>
        MARYAN CLICK THIS
      </button>

      {/* Repeating text */}
      <div style={styles.textBox}>
        {Array(200).fill(text).join("")}
      </div>

      {/* Images */}
      <div style={styles.images}>
        <img src="/room1.png" alt="room1" style={styles.img} />
        <img src="/room2.png" alt="room2" style={styles.img} />
        <img src="/download (3).jpg" alt="room3" style={styles.img} />
      </div>
    </div>
  );
}

const styles = {
  body: {
    backgroundColor: "black",
    color: "#00ff00",
    fontFamily: "monospace",
    minHeight: "100vh",
    overflow: "hidden",
    padding: "20px",
    textAlign: "center"
  },

  glitch: {
    fontSize: "60px",
    animation: "glitch 0.3s infinite",
    textShadow: "2px 2px red, -2px -2px blue"
  },

  button: {
    marginTop: "20px",
    padding: "15px 30px",
    fontSize: "20px",
    backgroundColor: "black",
    color: "#00ff00",
    border: "2px solid #00ff00",
    cursor: "pointer",
    animation: "flicker 0.2s infinite",
    boxShadow: "0 0 10px #00ff00"
  },

  textBox: {
    marginTop: "20px",
    fontSize: "14px",
    lineHeight: "20px",
    whiteSpace: "pre-wrap",
    animation: "flicker 0.2s infinite"
  },

  images: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    marginTop: "30px",
    justifyContent: "center"
  },

  img: {
    width: "250px",
    border: "3px solid #00ff00",
    filter: "contrast(200%) brightness(120%)"
  }
};

export default App;
