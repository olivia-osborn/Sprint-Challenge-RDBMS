const knex = require("knex");
const knexConfig = require("../knexfile");
const db = knex(knexConfig.development);

const get = () => {
    return db("projects")
}

const getById = (id) => {
    let project = db.select("projects.id", "projects.name", "projects.description", "projects.completed")
    .from("projects")
    .where({"projects.id": id})
    .innerJoin("actions", "projects.id", "actions.projectId")
    .first()
    return project
        // .from("projects")
}

const insert = (newProject) => {
    return db("projects").insert(newProject)
}

module.exports = {
    get,
    getById,
    insert,
}