import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ImagenAncla from './components/imagenAncla'
import Lista from './components/Lista'

const nombre = 'Julio'
const template = `Hola me llamo ${nombre + " * " } y soy su Coach`
const nombres = [nombre, 'Pedro', 'Maria', "Alma", "Arturo"]

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h3>{template}</h3>
        <ImagenAncla liga={"https://vitejs.dev"} imgLogo={viteLogo} texto={"algo mas"} />
        <ImagenAncla liga={"https://react.dev"} imgLogo={reactLogo} texto={"React logo"} />
       
      </div>
      <h1>Vite + React</h1>
      <div className={"class-"+ count}>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <br />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Lista elementos={nombres} />
    </>
  )
}

export default App
