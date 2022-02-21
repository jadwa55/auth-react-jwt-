import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
 
function App() {
  return (
      <Routes>
        <Route path="/login" element={ < Login /> }>
        </Route>
        <Route path="/register"  element={ < Register /> }>
        </Route>
      </Routes>
  );
}
 
export default App;