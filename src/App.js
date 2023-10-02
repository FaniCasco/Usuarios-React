
import './App.css';
import Usuario from './componentes/Usuario';

function App() {
  return (
    <div className="App">
      <Usuario nombre="Fani" cargo="Desarrolladora Web" conoceme="Cv de Fani" imagen={require('./componentes/img/fani.jpeg')} />
      <Usuario nombre="Cristian" cargo="Electromecanico" conoceme="Cv de Cristian" imagen={require('./componentes/img/cris.jpeg')} />
      <Usuario nombre="Emma" cargo="Programadora" conoceme="Cv de Emma" imagen={require('./componentes/img/emma.jpeg')} />

    </div>
  );
}

export default App;
