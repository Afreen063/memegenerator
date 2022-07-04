
import './App.css';
import Header from './components/Header';
import Meme from './components/Meme';
import Generate from './components/Generate';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Home from './components/Home';
import Product from './components/Product';
import SignIn from './components/Signin';
import NavBar from './components/NaviBar'

function App() {
  return (
   <div>
    <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
         <Header />
         <Generate />
        
   </div>
    
  )
}

export default App;
