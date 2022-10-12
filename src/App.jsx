import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import NavBar from "./components/pages/NavBar";
import {ItemContainer} from './components/item/ItemContainer';


function App() {

  return (
    <div>
      
      <NavBar />

      <Routes>

        <Route exact path='/' element={<Home />} />
        <Route path='/:categorySeries' element={<Home />} />
        <Route path='/serie/:id' element={<ItemContainer /> } />

      </Routes>
      
    </div>
  )
}

export default App;
