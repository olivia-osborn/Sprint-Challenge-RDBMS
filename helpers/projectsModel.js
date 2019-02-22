const knex = require("knex");
const knexConfig = require("../knexfile");
const db = knex(knexConfig.development);

const get = () => {
    return db("projects")
}

const getById = (id) => {
    return db("projects")
        .where({id})
        .first()
        .from("projects")
        .innerJoin("actions", "projects.id", "actions.projectId")
}

const insert = (newProject) => {
    return db("projects").insert(newProject)
}

module.exports = {
    get,
    getById,
    insert,
}