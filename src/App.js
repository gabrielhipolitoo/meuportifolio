import About from "./Componentes/About";
import Budget from "./Componentes/Budget";
import Header from "./Componentes/Header";
import Initial from "./Componentes/Initial";
import Methodology from "./Componentes/Methodology";
import Services from "./Componentes/Services";
import Skills from "./Componentes/Skills";

function App() {
  return (
    <main className="portfolio">
      <Header/>
      <Initial/>
      <About/>
      <Services/>
      <Budget/>
      <Methodology/>
    </main> 
  );
}

export default App;
