export default function Card (props) {
    return (
      
        <div className='flex'>
        <div>
          <p>¡Hola {props.nombre}!  </p>
          <p>Sabemos que tu mascota se llama {props.mascota}, lindo nombre</p>
        </div>
        </div>
      
    )
  }
  