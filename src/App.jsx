import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div
        style={{
          width: "500px",
          padding: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <input
          type="text"
          style={{ width: "70%", padding: "10px", outline: "none" }}
        />
        <button
          style={{
            width: "25%",
            padding: "10px",
            textAlign: "center",
            marginLeft: "15px",
            backgroundColor: "#fcba03",
            border: "1px solid #fcba03",
            cursor: "pointer",
          }}
        >
          Save
        </button>
      </div>
      <div
        style={{
          maxWidth: "550px",
          maxHeight: "700px",
          padding: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          backgroundColor: "red",
          overflowY: "auto",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "10px 0 10px 0",
            backgroundColor: "#fcba03",
            padding: "10px",
          }}
        >
          <p>This is my sample tododdddddddddddddddddddddddddddddddddddd.</p>
          <button
            style={{
              padding: "10px",
              marginRight: "10px",
            }}
          >
            Edit
          </button>
          <button
            style={{
              padding: "10px",
            }}
          >
            Delete
          </button>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "10px 0 10px 0",
            backgroundColor: "#fcba03",
            padding: "10px",
          }}
        >
          <p>This is my sample tododdddddddddddddddddddddddddddddddddddd.</p>
          <button
            style={{
              padding: "10px",
              marginRight: "10px",
            }}
          >
            Edit
          </button>
          <button
            style={{
              padding: "10px",
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
