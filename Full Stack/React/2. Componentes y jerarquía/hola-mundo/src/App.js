import logo from './logo.svg';
import './App.css';
import Greetingf from './components/pure/greetingF';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Componente propio greeting.jsx */}
        {/*<Greeting name="Tito"></Greeting>*/}
        <Greetingf name="Tito"></Greetingf>
      </header>
    </div>
  );
}

export default App;
