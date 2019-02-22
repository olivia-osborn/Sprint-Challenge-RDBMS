const express = require("express");
const router = express.Router();
const Projects = require("../helpers/projectsModel");
const knex = require("knex");
const knexConfig = require("../knexfile");
const db = knex(knexConfig.development);

router.get("/", async(req, res) => {
    try {
        projects = await Projects.get()
        res.status(200).json(projects)
    } catch (error) {
        res.status(500).json({error: "couldn't fetch your data!"})
    }
})

router.get("/:id", (req, res) => {
    const project = db("projects")
        .where("id", req.params.id)
        .first();
    const actions = db("actions").where("projectId", req.params.id);

    Promise.all([project, actions])
        .then(([project, actions]) => {
            if (!project)
                return res.status(404).json({error: "project was not found"})
            let result = project
            result.actions = actions.map(action => 
                action)
            res.status(200).json(result)
        })
        .catch(error=> {res.status(500).json(error)})
})


router.post("/", async (req, res) => {
    if (!req.body.name || !req.body.description) {
        res.status(400).json({error: "remember to enter a name and a description!"})
    }
    try {
        project = await Projects.insert(req.body)
        res.status(201).json({project})
    } catch (error) {
        res.status(500).json({error: "couldn't add project!"})
    }
})


module.exports = router