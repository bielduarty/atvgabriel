import './App.css'
import Saudacao from './componentes/Saudacao'
import FraseMotivacional from './componentes/FraseMotivacional'
import ListaOrdenada from './componentes/ListaOrdenada'
import Imagem from './componentes/imagem'
import Botao from './componentes/Botao'
import Link from './componentes/Link'
import Titulo from './componentes/Titulo'
import Tentativa from './Componentes/If'
import Garagem from './Componentes/Garagem'


function App() {
  return (
    <>
      <Saudacao />
      <FraseMotivacional />
      <ListaOrdenada />
      <Imagem />
      <Botao />
      <Link />
      <Titulo titulo="Guerra no Afeganistão" subtitulo/>
      <Titulo titulo="Guerra no Irã" />
      <Tentativa eGol={true} />
      <Garagem/>   
    </>
  )
}

export default App
