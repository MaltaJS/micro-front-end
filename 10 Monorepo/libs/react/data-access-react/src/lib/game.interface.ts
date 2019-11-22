import { GameTypes } from './game-types.interface';

export interface Game {
    id: string,
    name: string,
    provider: string,
    image: string,
    bg: string,
    type: GameTypes,
    pot: number
}