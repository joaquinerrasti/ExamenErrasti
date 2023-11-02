import React from 'react'

const Card = ({equipos}) => {
  return (
    <div>
        <ul>
            {equipos.map((equipo) => <li key={equipo.id}>{equipo.id} - {equipo.nombre} - {equipo.pais}</li>)}
        </ul>
    </div>
  )
}

export default Card