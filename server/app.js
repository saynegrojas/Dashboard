import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { UserRoutes, TeamRoutes, CalendarEventRoutes } from './routes/index.js';

const app = express();

app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/user', UserRoutes);
app.use('/api/team', TeamRoutes);
app.use('/api/calendarEvent', CalendarEventRoutes);

export default app;
