export const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.KNIGHT,
    collect: (monitor) => ({
        isDragging: !!monitor.isDragging()
    })
}))