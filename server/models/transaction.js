import connection from '../config/connection.js';
import qryInsert from '../sql-queries/insert/qryInsert.js';
import qryGet from '../sql-queries/select/qryGet.js';

const tableName = 'transactions';
const Transactions = {
  getAll: async () => {
    try {
      const [query, replacements] = qryGet({
        table: [tableName],
      });
      const [rows] = await connection.query(query, replacements);
      return rows;
    } catch (error) {
      console.error('Error executing transactions getAll query:', error);
    }
  },

  create: async (transaction) => {
    try {
      const { query, values } = qryInsert(tableName, transaction);
      const [result] = await connection.query(query, values);
      return result;
    } catch (error) {
      console.error('Error executing transactions create query:', error);
    }
  },
};

export default Transactions;
