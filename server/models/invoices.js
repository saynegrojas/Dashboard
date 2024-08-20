import connection from '../config/connection.js';
import qryInsert from '../sql-queries/insert/qryInsert.js';
import qryGet from '../sql-queries/select/qryGet.js';

const tableName = 'invoices';
const Invoices = {
  getAll: async () => {
    try {
      const [query, replacements] = qryGet({
        table: [tableName],
      });
      const [rows] = await connection.query(query, replacements);
      return rows;
    } catch (error) {
      console.error('Error executing invoices getAll query:', error);
    }
  },

  create: async (invoice) => {
    try {
      const { query, values } = qryInsert(tableName, invoice);
      const [result] = await connection.query(query, values);
      return result;
    } catch (error) {
      console.error('Error executing invoices create query:', error);
    }
  },
};

export default Invoices;
