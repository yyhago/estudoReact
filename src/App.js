import "./App.css";
import OutraLista from "./components/OutraLista.js";

function App() {
  const meusItens = ['Angular', 'Vue', 'React'];

  return <div className="App">
    <OutraLista itens={meusItens}/>
    <OutraLista itens={[]}/>
  </div>;
}

export default App;
