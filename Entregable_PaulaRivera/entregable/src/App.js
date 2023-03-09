import { useState } from 'react'
import { Card } from './Componentes/Card'


const App = () => {
  
    const [error, setError] = useState('')
    const [nombre, setNombre] = useState('')
    const [mascota, setMascota] = useState('')  


  function handleSubmit(e) {
    e.preventDefault()
    if (!nombre || nombre.size < 3) {
      setError('Por favor chequea que la información sea correcta')
      return
    }
    if (!mascota || mascota.size < 6) {
      setError('Por favor chequea que la información sea correcta')
      return
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='nombre'>Nombre</label>
          <input
            type='text'
            name='nombre'
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor='mascota'>Mascota</label>
          <input
            type='text'
            name='mascota'
            value={mascota}
            onChange={(e) => setMascota(e.target.value)}
          />
        </div>
        <button type='submit'>Enviar</button>
      </form>
      
      {error && <p>{error}</p>}
      {/* <Card nombre={nombre} mascota={mascota}/> */}
      
    </>
    
  )
}

export default App