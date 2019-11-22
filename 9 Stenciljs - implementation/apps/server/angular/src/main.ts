import * as express from 'express';
import { getSports } from './app/sports';

const app = express();

app.get('/api/sports', getSports);

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
