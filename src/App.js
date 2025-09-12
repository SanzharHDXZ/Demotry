// App.jsx
import React, { useState } from "react";

export default function App() {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div style={styles.container}>
      {!showMessage ? (
        <button style={styles.button} onClick={() => setShowMessage(true)}>
          Click me
        </button>
      ) : (
        <h1 style={styles.text}>Good luck!</h1>
      )}
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f4f4f9",
  },
  button: {
    padding: "20px 40px",
    fontSize: "28px",
    borderRadius: "12px",
    border: "none",
    cursor: "pointer",
    backgroundColor: "#4CAF50",
    color: "white",
    transition: "0.3s",
  },
  text: {
    fontSize: "72px", // стало больше
    color: "#333",
    fontWeight: "bold",
  },
};
