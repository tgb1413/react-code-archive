import { Route, Routes } from "react-router-dom";
import { Case_useRef1 } from "./cases";

function App() {
  return (
    <Routes>
      <Route element={<Case_useRef1 />} path="/useref1" />
    </Routes>
  );
}

export default App;
