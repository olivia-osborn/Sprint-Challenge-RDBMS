const express = require("express");
const router = express.Router();
const Actions = require("../helpers/actionsModel");


router.get("/", async(req, res) => {
    try {
        actions = await Actions.get()
        res.status(200).json(actions)
    } catch (error) {
        res.status(500).json({error: "couldn't fetch your data!"})
    }
})

router.get("/:id", async (req, res) => {
    try {
        action = await Actions.getById(req.params.id)
        if (!action) {
            res.status(404).json({error: "no action by that ID!"})
        } else {
            res.status(200).json(action);
        }
    } catch (error) {
        res.status(500).json({error: "couldn't fetch your data!"})
    }
})

router.post("/", async (req, res) => {
    if (!req.body.description || !req.body.projectId) {
        res.status(400).json({error: "remember to enter a description and a project ID!"})
    }
    try {
        action = await Actions.insert(req.body)
        res.status(201).json({action})
    } catch (error) {
        res.status(500).json({error: "couldn't add action!"})
    }
})

module.exports = router