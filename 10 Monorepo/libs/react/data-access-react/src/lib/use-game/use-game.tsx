import React, { useState, useEffect } from 'react';

import { Game } from "../game.interface";

export function useGame(id: string) {
  const [game, setGame] = useState<Game>();

  useEffect(() => {
    fetch('/api/casino/${id}')
      .then(r => r.json())
      .then(setGame)
  }, [])

  return game;
}