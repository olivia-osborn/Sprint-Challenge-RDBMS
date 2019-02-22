const knex = require("knex");
const knexConfig = require("../knexfile");
const db = knex(knexConfig.development);

const get = () => {
    return db("projects")
}

const insert = (newProject) => {
    return db("projects").insert(newProject)
}

module.exports = {
    get,
    insert,
}