import express from 'express';
import routes from './routes/index.js';

const app = express()
const PORT = 1245;

app.use((req, res, next) => {
  req.databaseFile = process.argv[2];
  next();
});

app.use('/', routes);

app.listen(PORT);

export default app;