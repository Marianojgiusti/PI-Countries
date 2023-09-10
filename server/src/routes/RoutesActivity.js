const {Router} = require('express');
const {GetActivitiesHandler, CreateActivitiesHandler } = require ("../handlers/Activitieshandlers")

const ActivityRouter = Router()

ActivityRouter.get("/", GetActivitiesHandler)

ActivityRouter.post("/", CreateActivitiesHandler)

module.exports = ActivityRouter;