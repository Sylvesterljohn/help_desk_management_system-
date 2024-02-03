const { Pool } = require('pg');

const pool = new Pool({
  user: '',
  host: 'localhost',
  database: 'help_desk_management_system',
  password: '2002mama',
  port: 5432,
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};
