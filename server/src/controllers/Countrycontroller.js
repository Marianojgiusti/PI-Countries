const axios = require ("axios");
const {Activity, Country} = require ("../db")
const {Sequelize} = require ("sequelize")


const getAllCountriesController = async () => {
    const Countriesfind = await Country.findAll({
        include: {
            model: Activity,
            atributtes: [],
            through:{atributtes: []} 
        }
    });
    return Countriesfind;
};


const searchCountryByNameController = async (name) => {
    const Countriesfindname = await Country.findAll({
        where: { name:{[Sequelize.Op.iLike]: `%${name}%`} },
        include:{
            model: Activity,
            atributtes: ["name", "difficulty", "duration", "season"]
        }
        })
     
         return Countriesfindname; 
    };


const getCountryByIdController = async (id) => {
    let findById = await Country.findOne({
        where: { id: id},
        include: { model: Activity,
        atributtes: ["name", "difficulty", "duration", "season"]
         }
    
    });
    return findById;
}




module.exports = {getAllCountriesController, searchCountryByNameController, getCountryByIdController}