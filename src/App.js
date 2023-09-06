import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Titles from './Components/Titles';
import Header from './Components/Header';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import {asosi} from './Pages/asosi';
import {oidkafedra} from './Pages/oidkafedra';
import {omuzgoron} from './Pages/omuzgoron';
import {malumot} from './Pages/malumot';
import {mavodho} from './Pages/mavodho';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollButton from './Components/ScrollButton';
function App() {
  return (
   <>
   <BrowserRouter>
   <Titles />
    <Header />
    <Nav />
     <ScrollButton />
    <Routes>
      <Route exact path="/" Component={asosi} />
      <Route path="/oidkafedra" Component={oidkafedra} />
      <Route path="/omuzgoron" Component={omuzgoron} />
      <Route path="/malumot" Component={malumot} />
      <Route path="/mavodho" Component={mavodho} />
    </Routes>
    <Footer />
    
    </BrowserRouter>
 </>
  );
}

export default App;
