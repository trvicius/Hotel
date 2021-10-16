import 'reflect-metadata';
import express from 'express'

import './database/connect'
import routes from './routes'
import cors from 'cors';

const app = express();

app.use(cors())
app.use(express.json());
app.use(routes)

app.listen(3000, () => console.log('Server Started at http://localhost:3000'))