import { ListKontak, AddKontak } from "./components";

function App() {
  return (
    <div style={{ padding: "30px" }}>
      <h2>Apk Contact</h2>
      <hr />
      <AddKontak />
      <hr />
      <ListKontak />
    </div>
  );
}

export default App;
