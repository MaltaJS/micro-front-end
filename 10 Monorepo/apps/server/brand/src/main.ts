
import * as express from 'express';
import { getSports } from './app/sports';
import { getGame, getGames } from './app/games';

const app: any = express();

app.get('/api/sports', getSports);
app.get('/api/casino', getGames);
app.get('/api/casino/:game', getGame);

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
