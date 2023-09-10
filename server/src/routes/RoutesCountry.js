const {Router} = require("express");
const {GetCountrybyIdHandler, GetCountriesHandler} = require ("../handlers/Countrieshandlers")

const CountryRouter= Router()

CountryRouter.get("/", GetCountriesHandler)

CountryRouter.get("/:id", GetCountrybyIdHandler)

module.exports = CountryRouter;