import './App.scss';
import Body from './components/Body';
import Body2 from './components/Body2';
import Header from './components/Header';
import Us from './components/us';
import Precio from './components/Precio';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';


function App() {
  return (
    <div className='App text-black overflow-hidden'>
      
        <Header/>
        <Body/>
          <Body2/>
          <Precio/>
          <Us/>
        
       

    </div>
  );
}

export default App;
