import createRouter from '../utils/createRouter.js';
import {
  getAllCalendarEvents,
  createCalendarEvent,
} from '../controllers/calendarEventController.js';

const eventRouter = createRouter();

eventRouter.get('/getAll', getAllCalendarEvents);
eventRouter.post('/create', createCalendarEvent);

export default eventRouter;
