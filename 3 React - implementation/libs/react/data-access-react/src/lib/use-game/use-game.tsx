import React, { useState, useEffect } from 'react';

import { Game } from "../game.interface";

export function useGame(id: string) {
  const [game, setGame] = useState<Game>();

  useEffect(() => {
    // fetch('/api/react/${id}')
    //   .then(r => r.json())
    //   .then(setGame)
  }, [])

  // return game;

  return [
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
  ].filter(game => game.id === id)[0] as Game
}