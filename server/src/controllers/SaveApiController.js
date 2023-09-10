const axios = require("axios");
const {Country} = require ("../db");


const getcountries = async () => {
    const getcountriesaxios = (await axios.get("http://localhost:5000/countries")).data;
    const countriesmap = await getcountriesaxios.map(e => { 
        return{
        id: e.cca3,
        name: e.name.common,
        image: e.flags.png,
        continent: e.continents[0],
        capital: e.capital?.[0] || "Desconocido",
        subregion: e.subregion,
        area: e.area, 
        population: e.population
    };
     });
     
     return countriesmap
    }

const saveapicountries = async () => {
    const allcountries = await getcountries();
    await Country.bulkCreate(allcountries);

    return allcountries;
}



module.exports = {saveapicountries, getcountries}