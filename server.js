import express from 'express';
const app = express();

app.use(express.json());

import createRoute from './src/routes/create/index.js';
import readRoute from './src/routes/read/index.js';
import updateRoute from './src/routes/update/index.js';
import deleteRoute from './src/routes/delete/index.js';

app.use('/read', readRoute);
app.use('/create', createRoute);
app.use('/update', updateRoute);
app.use('/delete', deleteRoute);

const port = 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));
