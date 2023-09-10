const express = require("express")
const {getAllActivitiesController, createActivityController} = require ("../controllers/Activitycontroller")

const GetActivitiesHandler = async (req, res) => {
    try {
        const results = await getAllActivitiesController();
        res.status(200).json(results)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

const CreateActivitiesHandler = async (req, res) => {
    const { name, difficulty, duration, season, countries } = req.body;
    try {
        const newActivity = await createActivityController(name, difficulty, duration, season, countries)
        res.status(200).json(newActivity)
    }
    catch (error) {
        res.status(400).json({error: error.message})
    }
}



module.exports = { GetActivitiesHandler, CreateActivitiesHandler }