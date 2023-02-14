import './Styles/Main.css'
import { Route, Routes } from "react-router";
import PagePrincipal from "./pages/PagePrincipal";
import MovieDetails from './pages/MovieDetails';


function App() {
  return (
      <Routes>
        <Route path="/" element={<PagePrincipal/>}/>
        <Route path='/details' element={<MovieDetails/>}/>
      </Routes>
  );
}

export default App;
