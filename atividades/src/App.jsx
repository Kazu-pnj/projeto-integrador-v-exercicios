import { useState } from 'react'
import './App.css'
import Titulo from './components/Titulo'
import Mensagem from './components/Mensagem'
import BotaoSaudacao from './components/BotaoSaudacao'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Titulo/>
    
      <Mensagem/>

      <button onClick={BotaoSaudacao}>Clique Aqui!</button>
    </div>

  )
}

export default App
