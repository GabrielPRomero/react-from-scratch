import Gabact from "./Gabact";

/** @jsx Gabact.createElement */
function Counter() {
  const [state, setState] = Gabact.useState(1);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        margin: "0 auto",
      }}
    >
      <button
        style={{ width: "25%", backgroundColor: "lightGreen" }}
        onClick={() => setState((c) => c + 1)}
      >
        <h1>+</h1>
      </button>
      <h1>Count: {state}</h1>
      <button
        style={{ width: "25%", backgroundColor: "red" }}
        onClick={() => setState((c) => c - 1)}
      >
        <h1>-</h1>
      </button>
    </div>
  );
}
const element = <Counter />;
const container = document.getElementById("root");
Gabact.render(element, container);
