import './App.css';

import BackgroundAnimation from "./Components/BackgroundAnimation";

function App() {
  return (
    <div className="App">

      <div className="section mojibake">
          <pan>Mojibake</pan>
      </div>


        <div className="section p5">
            <p>Mojibake</p>
            <BackgroundAnimation/>
        </div>
    </div>
  );
}

export default App;
