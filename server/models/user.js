import connection from '../config/connection.js';
import qryGet from '../sql-queries/select/qryGet.js';

const tableName = 'users';
const User = {
  getAll: async () => {
    const [query, replacements] = qryGet({
      table: [tableName],
    });
    const [rows] = await connection.query(query, replacements);
    return rows;
  },
  getById: (id) => {
    return connection.findById(id);
  },
  create: (user) => {
    const { username, password, email } = user;
    // const [query, replacements] = qryGet({
    //   table: [`leads l`, `program p ON (p.id = l.programid)`],
    //   column: `p.SupplementalTableName`,
    //   where: [[`l.id`, `=`, leadID]],
    // });
    const [result] = connection.query(
      'INSERT INTO users (username, password, email) VALUES (?, ?, ?)',
      [username, password, email],
    );
    return result.insertId;
  },
  update: (id, user) => {
    return connection.findByIdAndUpdate(id, user, { new: true });
  },
  delete: (id) => {
    return connection.findByIdAndDelete(id);
  },
};

export default User;
