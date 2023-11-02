import { useState } from 'react'
import Card from './Card'

function App() {
  const [search, setSearch] = useState('')
  const [docsFound, setDocsFound] = useState([])
  const [show, setShow] = useState(false)
  const [error, setError] = useState(false)
  let equipos = [
    { id: 1, nombre: 'Boca Juniors', pais: 'Argentina'},
    { id: 2, nombre: 'Real Madrid' , pais: 'España'},
    { id: 3, nombre: 'Bayern Munich' , pais: 'Alemania'},
    { id: 4, nombre: 'Juventus' , pais: 'Italia'}
  ]
  console.log(search)
  const handleChange = (event) => setSearch(event.target.value.trim())
  const handleSearch = () => {
    const filteredDocs = equipos.filter(equipo => equipo.nombre.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
    setDocsFound(filteredDocs)
    if(filteredDocs.length >0){
      setShow(true)
      setError(false)
    } else {
      setError(true)
      setShow(false)
    }
    
  }
  return (
    <>
      <input type="text" placeholder='Búsqueda' onChange={handleChange}/>
      <button onClick={handleSearch} disabled={search.length < 3 || search.trim().startsWith(' ')}>🔍</button>

      {show ?
      <>
        <h3>Equipos Encontrados</h3>
        <Card equipos={docsFound}/>
      </>
      :
      <Card equipos={equipos} />
      }
      {error && <h3>Por favor chequea que la información sea correcta</h3>}
    </>
  )
}

export default App