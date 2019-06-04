import * as Koa from 'koa';
import * as bodyparser from 'koa-bodyparser';
import * as mongoose from 'mongoose';

import { config } from './config';
import { logger } from './logging';
import { routes } from './routes';

const app = new Koa();

app.use(logger);
app.use(bodyparser());
app.use(routes);

app.listen(config.port);

mongoose.connect(config.dbPath);

console.log(`Server running on port ${config.port}`);
