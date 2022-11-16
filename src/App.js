import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Start from './screens/Start';
import Art from './screens/Art';
import Artist from './screens/Artist';
import Bio from './screens/Bio';
import Science from './screens/Science'
import Health from './screens/Health'
import Business from './screens/Business'
import Musician from './screens/Musician'
import Photographer from './screens/Photographer'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Start/>}/>
          <Route index element={<Start/>} />
          <Route path="art" element={<Art/>} />
          <Route path="science" element={<Science/>} />
          <Route path="health" element={<Health/>} />
          <Route path="business" element={<Business/>} />
          <Route path="artist" element={<Artist/>} />
          <Route path="Bio" element={<Bio/>} />
          <Route path="Musician" element={<Musician/>} />
          <Route path="Photographer" element={<Photographer/>} />

        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
