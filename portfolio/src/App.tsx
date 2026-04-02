import './index.css';

// 1. Importamos os componentes que acabamos de criar
import Hero from './components/Hero';
import Skills from './components/Skills';
import Works from './components/Works';

function App() {
  return (
    // 2. Usamos essa tag vazia <> </> chamada "Fragment". 
    // Ela serve para agrupar vários componentes juntos sem criar uma <div> desnecessária no HTML.
    <>
      <Hero />
      <Skills />
      <Works />
    </>
  )
}

export default App;
