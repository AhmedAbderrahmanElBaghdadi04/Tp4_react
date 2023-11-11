import logo from './logo.svg';
import Cmpchekbox from './COMP/Cmpchekbox';
import Slk from './COMP/tp2sld/components/hhhh';
import Cueffect from './USEEFFCOMP/Cueffect';
import Cueffect2 from './USEEFFCOMP/Cueffect2';
import {Routes,Route} from 'react-router-dom';
import Home from './USEEFFCOMP/ROUTESS/Home';
import Profil from './USEEFFCOMP/ROUTESS/Profil';
import {Link} from 'react-router-dom';
import Menu from './USEEFFCOMP/ROUTESS/Menu';

export default function App() {
  return (
    <div className="App">
      <center>
      <Menu></Menu>
<br /><br />
     <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/profil' element={<Profil />}></Route>
        <Route path='*' element={<><h1>404</h1></>}></Route>
     </Routes>
      </center>
    </div>
  );
}

