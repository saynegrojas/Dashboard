import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import {
  TeamRoutes,
  CalendarEventRoutes,
  ContactsRoutes,
  InvoicesRoutes,
  TransactionsRoutes,
} from './routes/index.js';

const app = express();

app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/contacts', ContactsRoutes);
app.use('/api/team', TeamRoutes);
app.use('/api/invoices', InvoicesRoutes);
app.use('/api/transactions', TransactionsRoutes);
app.use('/api/calendarEvent', CalendarEventRoutes);

export default app;
