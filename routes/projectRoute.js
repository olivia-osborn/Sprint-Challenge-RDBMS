const express = require("express");
const router = express.Router();
const Projects = require("../helpers/projectsModel");

router.get("/", async(req, res) => {
    try {
        projects = await Projects.get()
        res.status(200).json(projects)
    } catch (error) {
        res.status(500).json({error: "couldn't fetch your data!"})
    }
})

router.get("/:id", async (req, res) => {
    try {
        project = await Projects.getById(req.params.id)
        if (!project) {
            res.status(404).json({error: "no project by that ID!"})
        } else {
            res.status(200).json(project);
        }
    } catch (error) {
        res.status(500).json({error: "couldn't fetch your data!"})
    }
})



module.exports = router