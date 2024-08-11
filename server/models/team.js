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
  getById: (id) => {
    return connection.findById(id);
  },
  create: async (member) => {
    const { query, values } = qryInsert(tableName, member);
    try {
      const [result] = await connection.query(query, values);
      return result.insertId;
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
};

export default Team;
