import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Nav } from './Componants/Nav';
import { About } from './Componants/About';
import { Banner } from './Componants/Banner';
import { Detail } from './Componants/Detail';
import { Servics } from './Componants/Servics';
import Navbar from './Componants/Navbar';
import { Port } from './Componants/Port';
function App() {
  return (
   <>
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path='/e' element={<Port/>}></Route>
    {/* <Route path='a' element={<Servics/>}></Route>
    <Route path='/b' element={<Detail/>}></Route>
    <Route path='/c' element={<Banner/>}></Route>
    <Route path='/d' element={<About/>}></Route> */}
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
