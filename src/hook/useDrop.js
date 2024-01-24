import {moveKnight} from '../component/Game'

export const [, drop] = useDrop(
    () => ({
        accept: ItemTypes.KNIGHT,
        drop: () => moveKnight(x, y)
    }),
    [x, y]
)