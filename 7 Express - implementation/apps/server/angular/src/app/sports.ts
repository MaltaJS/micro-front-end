import { Sport } from '@maltajs/angular/data-access-angular';
import { Request, Response } from 'express';

const randomInteger = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max + 1 - min) + min);
}

const sports: Sport[] = [{
    id: 1,
    type: 'football',
    start: '2020-12-17T03:24:00',
    home: 'Japan',
    away: 'Venezuela',
    home_odd: '351/1',
    draw_odd: '32/1',
    away_odd: '29/1'
  }, {
    id: 2,
    type: 'football',
    start: '2020-12-17T02:24:00',
    home: 'Brazil',
    away: 'South Korea',
    home_odd: '21/1',
    draw_odd: '22/1',
    away_odd: '49/1'
  }, {
    id: 3,
    type: 'football',
    start: '2020-11-17T03:23:00',
    home: 'Wales',
    away: 'Hungary',
    home_odd: '35/1',
    draw_odd: '52/1',
    away_odd: '29/2'
  }]

  export const getSports = (req: Request, res: Response) => res.json(sports);