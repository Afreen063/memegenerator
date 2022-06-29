
import './App.css';
import Header from './components/Header';
import Meme from './components/Meme';
import Greet from './components/Greet';


function App() {
  return (
   <div>
         <Header />
         <Meme />
        <Greet name="afreen" />
   </div>
    
  )
}

export default App;
