import React, { useState, useEffect } from 'react';

import { Game } from "../game.interface";

export function useGames() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    // fetch('/api/react')
    //   .then(r => r.json())
    //   .then(setGames)
  }, [])

  // return games;

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
  ] as Game[]
}