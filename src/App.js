import "tailwind-lib-quentin/dist/index.css";
import { Button } from "tailwind-lib-quentin";

function App() {
  return (
    <div className="App">
      <Button text="Test" onClick={() => console.log("ok")} />
      <div className="w-full h-40 bg-primary-500">Bonjour</div>
    </div>
  );
}

export default App;
