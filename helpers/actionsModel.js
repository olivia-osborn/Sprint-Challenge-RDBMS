const knex = require("knex");
const knexConfig = require("../knexfile");
const db = knex(knexConfig.development);

const get = () => {
    return db("actions")
}

const getById = (id) => {
    return db("actions")
        .where({id: id})
        .first()
}

const insert = (newAction) => {
    return db("actions").insert(newAction)
}

module.exports = {
    get,
    getById,
    insert,
}