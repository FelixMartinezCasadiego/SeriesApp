import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import NavBar from "./components/pages/NavBar";
import {ItemContainer} from './components/item/ItemContainer';
import PaginationPages from "./components/pagination/PaginationPages";
import ItemListTopRatedContainer from "./components/item/ItemListTopRatedContainer";
import ItemListOnAir from "./components/item/ItemListOnAir";


function App() {

  return (
    <div>
      
      <NavBar />

      <Routes>

        <Route exact path='/' element={<Home />} />
        <Route path='/serie/:id' element={<ItemContainer /> } />
        <Route path='/pages/:id' element={<PaginationPages />} />
        <Route path='/topRated' element={<ItemListTopRatedContainer />} />
        <Route path='/onAir' element={<ItemListOnAir />} />

      </Routes>
      
    </div>
  )
}

export default App;
