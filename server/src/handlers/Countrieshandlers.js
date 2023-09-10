const express = require ("express");
const {searchCountryByNameController, getAllCountriesController, getCountryByIdController} = require ("../controllers/Countrycontroller")

const GetCountriesHandler = async (req, res) => {
    const { name } = req.query;
    try {
        const results = name ? await searchCountryByNameController(name) : await getAllCountriesController()
        res.status(200).json(results)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const GetCountrybyIdHandler = async (req, res) => {
    const {id} = req.params;
    try {
        const country = await getCountryByIdController(id);
        res.status(200).json(country);
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
}






module.exports = {GetCountriesHandler, GetCountrybyIdHandler}