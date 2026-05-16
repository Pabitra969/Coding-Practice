const {query} = require('../config/db');

const User = {};

// Function to create a new user
User.create = async (name, email, password) => {
  const result = await query(
    'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *',
    [name, email, password]
  );
  return result.rows[0];
}

// Function to find a user by email
User.findByEmail = async (email) => {
  const result = await query(
    'SELECT * FROM users WHERE email = $1',
    [email]
  );
  return result.rows[0];
}

// Function to find a user by ID
User.findById = async (id) => {
  const result = await query(
    'SELECT * FROM users WHERE id = $1',
    [id]
  );
  return result.rows[0];
}

//

module.exports = User;