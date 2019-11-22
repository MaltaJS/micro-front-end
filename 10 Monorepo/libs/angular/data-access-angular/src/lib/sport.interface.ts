import { SportTypes } from './sport-types.interface';

export interface Sport {
    id: number;
    type: SportTypes;
    start: string;
    home: string;
    away: string;
    home_odd: string;
    draw_odd: string;
    away_odd: string;

}