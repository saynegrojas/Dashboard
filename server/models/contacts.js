import connection from '../config/connection.js';
import qryInsert from '../sql-queries/insert/qryInsert.js';
import qryGet from '../sql-queries/select/qryGet.js';

const tableName = 'contacts';
const Contacts = {
  getAll: async () => {
    try {
      const [query, replacements] = qryGet({
        table: [tableName],
      });
      const [rows] = await connection.query(query, replacements);
      return rows;
    } catch (error) {
      console.error('Error executing contacts getAll query:', error);
    }
  },

  create: async (contact) => {
    try {
      const { query, values } = qryInsert(tableName, contact);
      const [result] = await connection.query(query, values);
      return result;
    } catch (error) {
      console.error('Error executing contacts create query:', error);
    }
  },
};

export default Contacts;
