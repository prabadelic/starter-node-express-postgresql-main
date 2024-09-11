const env = process.env.NODE_ENV || "development";
const config = require("../../knexfile")[env];
const knex = require("knex")(config);
console.log(process.env.DATABASE_URL);


module.exports = knex;