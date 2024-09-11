const path = require("path");
require("dotenv").config();  // Ensure .env is loaded at the start
const { DATABASE_URL } = process.env;

module.exports = {
  development: {
    client: "postgresql",
    connection: {
      connectionString: DATABASE_URL,
      ssl: { rejectUnauthorized: false }  // Include SSL config
    },
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations"),
    },
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds"),
    },
  },
};
