import React from 'react'
import { useDrag } from 'react-dnd'
import { ItemTypes } from '../const'

const Knight = () => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.KNIGHT,
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  }))

  return (
    <div
      ref={drag}
      style={{
        fontSize: '100px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        opacity: isDragging ? 0.5 : 1,
        fontWeight: 'bold',
        cursor: 'move',
      }}>
      ♘
    </div>
  )
}

export default Knight