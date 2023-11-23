import { useState } from 'react'

import Perfil from './components/Perfil' //podemos omitir index
import Formulario from './components/Formulario'
import ReposList from './components/ReposList'

function App() {
  const [formularioEstaVisivel, setFormularioEstaVisivel] = useState(true)
  const [nomeUsuario, setNomeUsuario] = useState('MozartSoares')
  const [valorInput, setValorInput] = useState('')

  const inputStyle = {
    backgroundColor: 'green',
    padding: '8px'
  }

  const alteraUsuario = (e) => {
    e.preventDefault()
    if (valorInput != '' ) {
      setNomeUsuario(valorInput)
    }
  }
  
  const alteraInput = (e) => {
    setValorInput(e.target.value)
  }

  
  return (
    <>  
      <form onSubmit={alteraUsuario} >
        <input style={inputStyle} type="text" id='input' onChange={alteraInput} />
        <button type="submit"> Procurar usuário </button>
      </form>
      <Perfil nomeUsuario={nomeUsuario} />
      <ReposList nomeUsuario={nomeUsuario} />
      {formularioEstaVisivel && (
        <Formulario />
      )}

      <button onClick={() => setFormularioEstaVisivel(!formularioEstaVisivel)} type="button">toggle form</button>
    </>
  )
}

export default App
