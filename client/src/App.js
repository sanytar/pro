import { Routes, Route } from "react-router-dom";
import Favorites from "./components/Favorites/Favorites";
import Greet from "./components/Greet/Greet";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Procrastination from "./components/Procrastination/Procrastination";
import Register from "./components/Register/Register";

function App() {
  const a = 1
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path={'/'} element={<Greet />} />
        <Route path={'/pro'} element={<Procrastination />} />
        <Route path={'/favorites'} element={<Favorites />} />
        <Route path={'/logout'} element={<Greet />} />
        <Route path={'/login'} element={<Login />} />
        <Route path={'/register'} element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
