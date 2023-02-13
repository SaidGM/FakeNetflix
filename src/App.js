import { Routes } from "react-router-dom";
import AllMovies from "./components/AllMovies";
import Categories from "./components/Categories";
import NavBar from "./components/NavBar";
import Favorites from "./components/Favorites";
import './Styles/Main.css'


function App() {
  return (
      <>
      <NavBar/>
      <AllMovies/>
      <Categories/>
      <Favorites/>
      </>
  );
}

export default App;
