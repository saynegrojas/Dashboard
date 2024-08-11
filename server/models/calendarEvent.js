import connection from '../config/connection.js';
import qryGet from '../sql-queries/select/qryGet.js';
import qryInsert from '../sql-queries/insert/qryInsert.js';

const tableName = 'calendar_events';
const CalendarEvent = {
  getAll: async () => {
    try {
      const [query, replacements] = qryGet({
        table: [tableName],
      });
      const [rows] = await connection.query(query, replacements);
      return rows;
    } catch (error) {
      console.error('Error executing calendar event getAll query:', error);
    }
  },
  getById: (id) => {
    return connection.findById(id);
  },
  create: async (event) => {
    const { query, values } = qryInsert(tableName, event);
    try {
      const [result] = await connection.query(query, values);
      return result.insertId;
    } catch (error) {
      console.error('Error executing calendar event create query:', error);
    }
  },
  update: (id, event) => {
    return connection.findByIdAndUpdate(id, event, { new: true });
  },
  delete: (id) => {
    return connection.findByIdAndDelete(id);
  },
};

export default CalendarEvent;
