import { CalendarEvent } from '../models/index.js';

const getAllCalendarEvents = async (request, response) => {
  try {
    const calendarEvents = await CalendarEvent.getAll();
    response.status(200).json(calendarEvents);
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
};

const createCalendarEvent = async (request, response) => {
  try {
    const calendarEvent = await CalendarEvent.create(request.body);
    response.status(201).json(calendarEvent);
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
};

export { getAllCalendarEvents, createCalendarEvent };
