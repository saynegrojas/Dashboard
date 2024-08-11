import app from './app.js';
import connection from './config/connection.js';

const PORT = process.env.PORT || 3003;

connection
  .getConnection()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Error connecting to the database:', err);
  });
