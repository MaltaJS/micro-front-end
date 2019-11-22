import React, { useState, useEffect } from 'react';

import { Game } from "../game.interface";

export function useGames() {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    fetch('/api/casino')
      .then(r => r.json())
      .then(setGames)
  }, [])

  return games;
}