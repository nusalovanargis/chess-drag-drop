import React from 'react'
import Square from './Square'
import { useDrop } from 'react-dnd'
import { ItemTypes } from '../const'
import {moveKnight} from '../component/Game'

export default function BoardSquare({ x, y, children }) {
    const black = (x + y) % 2 === 1
    const [{ isOver }, drop] = useDrop(() => ({
      accept: ItemTypes.KNIGHT,
      drop: () => moveKnight(x, y),
      collect: monitor => ({
        isOver: !!monitor.isOver(),
      }),
    }), [x, y])
    
    return (
        <div ref={drop} style={{
            position: 'relative',
            width: '100%',
            height: '100%',
        }}
        >
            <Square black={black}>{children}</Square>
            {isOver && (
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        height: '100%',
                        width: '100%',
                        zIndex: 1,
                        opacity: 0.5,
                        backgroundColor: 'yellow',
                    }}
                />
            )}
        </div>
    )
}