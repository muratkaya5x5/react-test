import { useState } from "react";
 import TestYasamDongusu from "./componenets/TestYasamDongusu"
 
function App() {
  const [show, setShow] = useState(false);
  return (
    <>
      <button onClick={() => setShow((show) => !show)}>
        {show ? "Gizle" : "Göster"}
      </button>
      {show && <TestYasamDongusu>Sonraki Konu</TestYasamDongusu>}
    </>
  );
}

export default App;
