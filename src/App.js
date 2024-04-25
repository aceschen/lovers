import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
//  main links
import Loved from './pages/Loved';
import Other from './pages/Other';
import Lovers from './pages/Lovers';

// core family
import Teddy from './pages/Teddy';
import Allie from './pages/Allie';
import Eva from './pages/Eva';
import Yupeng from './pages/Yupeng';
import Zoey from './pages/Zoey';

// hypotheses and co
import Minimo from './pages/Minimo';

// other friends
import Lindsay from './pages/Lindsay';

// other articles
import ALP from './pages/ALP';
import Eschaton from './pages/Eschaton';


import './App.css';

function App() {
  return (
    <>
       <Routes>
          {/* main links */}
          <Route path="/" element={<Home />} />
          <Route path="/loved" element={<Loved />} />
          <Route path="/other" element={<Other />} />
          <Route path="/lovers" element={<Lovers />} />
          


          {/* teddy's family  */}
          <Route path="/teddy" element={<Teddy />} />
          <Route path="/allie" element={<Allie />} />
          <Route path="/eva" element={<Eva />} />
          <Route path="/yupeng" element={<Yupeng />} />
          <Route path="/zoey" element={<Zoey />} />
          <Route path="/yupeng" element={<Yupeng />} />

          {/* hypotheses and co */}
          <Route path="/minimo" element={<Minimo />} />

          {/* other friends */}
          <Route path="/lindsay" element={<Lindsay />} />
          
          {/* other articles */}
          <Route path="/alp" element={<ALP />} />
          <Route path="/eschaton" element={<Eschaton />} />
       </Routes>
    </>
  );
}

export default App;
