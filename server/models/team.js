import connection from '../config/connection.js';
import qryGet from '../sql-queries/select/qryGet.js';
import qryInsert from '../sql-queries/insert/qryInsert.js';

const tableName = 'team';
const Team = {
  getAll: async () => {
    try {
      const [query, replacements] = qryGet({
        table: [tableName],
      });
      const [rows] = await connection.query(query, replacements);
      return rows;
    } catch (error) {
      console.error('Error executing team getAll query:', error);
    }
  },
  getById: async (id) => {
    try {
      const [query, replacements] = qryGet({
        table: [tableName],
        // where: [['id', '=', id]],
      });
      const [rows] = await connection.query(query, replacements);
      const singleRow = rows.filter((row) => row.id.toString() === id.toString());
      return singleRow;
    } catch (error) {
      console.error('Error executing team getById query:', error);
    }
  },
  create: async (member) => {
    let results = [];
    const { query, values } = qryInsert(tableName, member);
    try {
      const [result] = await connection.query(query, values);
      if (result.insertId) {
        const [query, replacements] = qryGet({
          table: [tableName],
        });
        const [rows] = await connection.query(query, replacements);
        results = rows;
      }
      return results;
    } catch (error) {
      console.error('Error executing team create query:', error);
    }
  },
  update: (id, user) => {
    return connection.findByIdAndUpdate(id, user, { new: true });
  },
  delete: (id) => {
    return connection.findByIdAndDelete(id);
  },

  getAllItems: async (name) => {
    try {
      const [query, replacements] = qryGet({
        table: [tableName],
      });
      const rows = ['Apple', 'Banana', 'Cherry', 'Date', 'Fig', 'Grape', 'Honeydew'];
      const singleRow = rows.filter((row) => row.toLowerCase().includes(name.toLowerCase()));
      return singleRow;
    } catch (error) {
      console.error('Error executing team getAll query:', error);
    }
  },
};

export default Team;
