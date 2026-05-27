import React, { useState, useRef, useEffect } from "react";

function App() {
  const text = "monix and maryan ";
  const [chaos, setChaos] = useState(false);
  const [bgColor, setBgColor] = useState("black");
  const [fakePopups, setFakePopups] = useState([]);

  const intervals = useRef([]);

  // ----------------------------
  // OPEN MULTIPLE BROWSER WINDOWS
  // ----------------------------
  const spawnWindows = () => {
    const urls = [
      "https://hackedscreen.com/",
      "https://hackedscreen.com/"
    ];

    for (let i = 0; i < 300; i++) {
      setTimeout(() => {
        window.open(
          urls[i % urls.length],
          "_blank",
          `
          width=${300 + Math.random() * 400},
          height=${200 + Math.random() * 300},
          left=${Math.random() * window.screen.width},
          top=${Math.random() * window.screen.height}
          `
        );
      }, i * 250);
    }
  };

  // ----------------------------
  // RANDOM FAKE ALERT TEXT
  // ----------------------------
  const getRandomScaryText = () => {
    const msgs = [
      "TRACKING IP...",
      "LOCATING TARGET...",
      "ACCESS GRANTED",
      "BREACH DETECTED",
      "DOWNLOADING FILES...",
      "HACKING MAINFRAME...",
      "DECRYPTING PASSWORDS...",
      "SNIFFING PACKETS...",
      "OVERRIDING FIREWALL...",
      "SENDING CATS..."
    ];

    return msgs[Math.floor(Math.random() * msgs.length)];
  };

  // ----------------------------
  // CHAOS MODE
  // ----------------------------
  const chaosMode = () => {
    if (chaos) return;

    setChaos(true);

    // Flashing background
    const bgInterval = setInterval(() => {
      const colors = [
        "black",
        "#110000",
        "#001100",
        "#000011",
        "#220000",
        "#002200"
      ];

      setBgColor(colors[Math.floor(Math.random() * colors.length)]);
    }, 120);

    intervals.current.push(bgInterval);

    // Spawn fake popups
    const popupInterval = setInterval(() => {
      setFakePopups(prev => [
        ...prev,
        {
          id: Math.random(),

          // position
          x: Math.random() * (window.innerWidth - 300),
          y: Math.random() * (window.innerHeight - 150),

          // movement
          dx: (Math.random() - 0.5) * 12,
          dy: (Math.random() - 0.5) * 12,

          width: 150 + Math.random() * 200,
          height: 80 + Math.random() * 120,
          text: getRandomScaryText()
        }
      ]);
    }, 180);

    intervals.current.push(popupInterval);

    // Move popups around
    const moveInterval = setInterval(() => {
      setFakePopups(prev =>
        prev.map(p => {
          let newX = p.x + p.dx;
          let newY = p.y + p.dy;

          let newDx = p.dx;
          let newDy = p.dy;

          // Bounce off walls
          if (newX <= 0 || newX + p.width >= window.innerWidth) {
            newDx *= -1;
          }

          if (newY <= 0 || newY + p.height >= window.innerHeight) {
            newDy *= -1;
          }

          return {
            ...p,
            x: Math.max(
              0,
              Math.min(window.innerWidth - p.width, newX)
            ),
            y: Math.max(
              0,
              Math.min(window.innerHeight - p.height, newY)
            ),
            dx: newDx,
            dy: newDy
          };
        })
      );
    }, 16);

    intervals.current.push(moveInterval);

    // Limit popup count
    const cleanupInterval = setInterval(() => {
      setFakePopups(prev => prev.slice(-300));
    }, 1000);

    intervals.current.push(cleanupInterval);

    // Open browser windows
    spawnWindows();
  };

  // ----------------------------
  // CLEANUP
  // ----------------------------
  useEffect(() => {
    return () => {
      intervals.current.forEach(clearInterval);
    };
  }, []);

  // ----------------------------
  // IMAGE CHAOS EFFECT
  // ----------------------------
  const getImageStyle = () => {
    if (!chaos) return styles.img;

    return {
      ...styles.img,
      transform: `
        translate(${Math.random() * 40 - 20}px,
        ${Math.random() * 40 - 20}px)
        rotate(${Math.random() * 20 - 10}deg)
        scale(${0.8 + Math.random() * 0.6})
      `,
      boxShadow: "0 0 25px red"
    };
  };

  return (
    <div
      style={{
        ...styles.body,
        backgroundColor: bgColor,
        animation: chaos ? "shake 0.15s infinite" : "none"
      }}
    >
      <h1 style={styles.glitch}>HACKED</h1>

      <button
        onClick={() => {
          window.location.href = "https://theannoyingsite.com";
        }}
        style={styles.button}
      >
        you have been hacked. click the button below me to fix it
      </button>

      <button onClick={chaosMode} style={styles.button2}>
        .... CLICK ME!!!!!! to get unblocked games
      </button>

      <div style={styles.textBox}>
        {Array(200).fill(text).join("")}
      </div>

      <div style={styles.images}>
        <img src="/room1.png" alt="room1" style={getImageStyle()} />
        <img src="/room2.png" alt="room2" style={getImageStyle()} />
        <img src="/download (3).jpg" alt="room3" style={getImageStyle()} />
      </div>

      {/* FAKE POPUPS */}
      {fakePopups.map(p => (
        <div
          key={p.id}
          style={{
            position: "fixed",
            left: `${p.x}px`,
            top: `${p.y}px`,
            width: p.width,
            height: p.height,
            backgroundColor: "#050505",
            border: "2px solid #ff0000",
            color: "#00ff00",
            fontFamily: "monospace",
            fontSize: "12px",
            padding: "8px",
            boxShadow: "0 0 15px red",
            zIndex: 9999
          }}
        >
          <div
            style={{
              borderBottom: "1px solid #ff0000",
              marginBottom: "4px"
            }}
          >
            <span style={{ color: "red" }}>ALERT</span> - SYSTEM BREACH
          </div>

          <div>{p.text}</div>
        </div>
      ))}

      {/* ANIMATIONS */}
      <style>
        {`
          @keyframes glitch {
            0% {
              text-shadow: 2px 2px red, -2px -2px blue;
            }

            20% {
              text-shadow: -2px 2px red, 2px -2px blue;
            }

            40% {
              text-shadow: 4px -4px red, -4px 4px blue;
            }

            60% {
              text-shadow: -4px -4px red, 4px 4px blue;
            }

            80% {
              text-shadow: 2px -2px red, -2px 2px blue;
            }

            100% {
              text-shadow: 2px 2px red, -2px -2px blue;
            }
          }

          @keyframes flicker {
            0% {
              opacity: 1;
            }

            50% {
              opacity: 0.4;
            }

            100% {
              opacity: 1;
            }
          }

          @keyframes shake {
            0% {
              transform: translate(0px, 0px);
            }

            25% {
              transform: translate(3px, -3px);
            }

            50% {
              transform: translate(-3px, 3px);
            }

            75% {
              transform: translate(3px, 3px);
            }

            100% {
              transform: translate(0px, 0px);
            }
          }
        `}
      </style>
    </div>
  );
}

const styles = {
  body: {
    color: "#00ff00",
    fontFamily: "monospace",
    minHeight: "100vh",
    overflow: "hidden",
    padding: "20px",
    textAlign: "center",
    transition: "background-color 0.1s linear"
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

  button2: {
    display: "block",
    margin: "20px auto",
    padding: "15px 30px",
    fontSize: "18px",
    backgroundColor: "black",
    color: "red",
    border: "2px solid red",
    cursor: "pointer",
    boxShadow: "0 0 15px red",
    animation: "flicker 0.1s infinite"
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
    filter: "contrast(200%) brightness(120%)",
    transition: "transform 0.15s linear"
  }
};

export default App;
