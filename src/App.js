import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
//  main links
import Loved from './pages/Loved';
import Classifieds from './pages/Classifieds';
import World from './pages/World';
import Lovers from './pages/Lovers';

// core family
import Teddy from './pages/Teddy';
import Allie from './pages/Allie';
import Eva from './pages/Eva';
import Yupeng from './pages/Yupeng';
import Zoey from './pages/Zoey';

// hypotheses and co
import Minimo from './pages/Minimo';
import Plick from './pages/Plick';
import Cheezer from './pages/Cheezer';
import Betbetbet from './pages/Betbetbet';

// other friends
import Lindsay from './pages/Lindsay';
import Anelisa from './pages/Anelisa';

// other articles
import ALP from './pages/ALP';
import Eschaton from './pages/Eschaton';

// classifieds
import April24 from './components/ad';


import './App.css';

function App() {
  return (
    <>
       <Routes>
          {/* main links */}
          <Route path="/" element={<Home />} />
          <Route path="/loved" element={<Loved />} />
          <Route path="/classifieds" element={<Classifieds />} />
          <Route path="/world" element={<World />} />
          <Route path="/lovers" element={<Lovers />} />

          {/* teddy's family  */}
          <Route path="/teddy" element={<Teddy />} />
          <Route path="/allie" element={<Allie />} />
          <Route path="/eva" element={<Eva />} />
          <Route path="/yupeng" element={<Yupeng />} />
          <Route path="/zoey" element={<Zoey />} />

          {/* hypotheses and co */}
          <Route path="/minimo" element={<Minimo />} />
          <Route path="/plick" element={<Plick />} />
          <Route path="/cheezer" element={<Cheezer />} />
          <Route path="/betbetbet" element={<Betbetbet />} />

          {/* other friends */}
          <Route path="/lindsay" element={<Lindsay />} />
          <Route path="/anelisa" element={<Anelisa />} />

          {/* classifieds */}
          
          
          {/* world articles */}
          <Route path="/alp" element={<ALP />} />
          <Route path="/eschaton" element={<Eschaton />} />
       </Routes>
    </>
  );
}

export default App;
