import { Route, Routes } from "react-router-dom";
import PagePrincipal from "./Pages/PagePrincipal";
import './Styles/Main.css'


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PagePrincipal/>}/>
      </Routes>
      </>
  );
}

export default App;
