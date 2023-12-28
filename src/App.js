import Bee1 from './img/Bee1.png';
import Bee2 from './img/Bee2.png';
import Flowers1 from './img/Flowers1.png';
import Flowers2 from './img/Flowers2.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <img src={Bee2} className="Bee-2" alt="bee" />
        <img src={Bee1} className="Bee-1" alt="bee" />
        <h1 className="App-title">
          Bee Knowledgeable
        </h1>
        <h3 className="App-intro">Step into the world of bees.
          <br />Learn all about these beautiful workers that help life flourish.</h3>
        <div className='button'>Learn more</div>
        <img src={Flowers1} className="Flowers1" alt="Flowers-background" />
        <img src={Flowers2} className="Flowers2" alt="Flowers-background" />
      </header>
    </div>
  );
}

export default App;
