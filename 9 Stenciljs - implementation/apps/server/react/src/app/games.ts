import { Game } from '@maltajs/react/data-access-react';
import { Request, Response } from 'express';

const randomInteger = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max + 1 - min) + min);
}

const games: Game[] = [
    {
      id: '1',
      name: 'Doom Of Egypt',
      provider: 'play n go',
      image: '/assets/doom.jpg',
      bg: '/assets/doom_bg.png',
      type: 'slot',
      pot: 312313131
    }, {
      id: '2',
      name: 'Dead or Alive',
      provider: 'netent',
      image: '/assets/alive.jpg',
      bg: '/assets/alive_bg.png',
      type: 'slot',
      pot: 32321122
    }, {
      id: '3',
      name: 'Mega fortune dreams',
      provider: 'evolution gaming',
      image: '/assets/megafortune.jpg',
      bg: '/assets/megafortune_bg.png',
      type: 'jackpot',
      pot: 2131312
    }
  ]

  export const getGames = (req: Request, res: Response) => res.json(games);
  export const getGame = (req: Request, res: Response) => res.json(games.filter(game => game.id === req.params.game)[0]);