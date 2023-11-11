import logo from './logo.svg';
import {Routes,Route} from 'react-router-dom';
import Home from './ROUTESS/Home';
import Profil from './ROUTESS/Profil';
import Menu from './ROUTESS/Menu';

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

