import './App.css';
import './yekan-web/font.css'
import Header from './header';
import Hero from './hero';
import BodyApp from './bodyApp';
import Footer from './footer';
import { Route, Routes } from 'react-router-dom';
import Info from './info';
import Login from './loginpage';

const homepage =(
  <>
    <Header />
    <Hero />
    <BodyApp />
    <Footer />
  </>
)
const infopage =(
  <>
    <Header />
    <Hero />
    <Info />
    <Footer />
  </>
)

function App() {
  return (
    <>
    
    <Routes>
      <Route path='/' element={homepage} />
      <Route path='/info' element={infopage} />
      <Route path="login" element={<Login />} />
    </Routes>
    
    </>
  );
}

export default App;
