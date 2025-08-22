import './App.css';

import BackgroundAnimation from "./Components/BackgroundAnimation";

function App() {
  return (
    <div className="App">

        <div className="section s1">
            <BackgroundAnimation/>
        </div>

        <div className="section s2">
            <pan>Mojibake (文字化け) du japonais signifiant un problème d'encodage menant à l'affichage de caractères erronés.</pan>
        </div>

    </div>
  );
}

export default App;
