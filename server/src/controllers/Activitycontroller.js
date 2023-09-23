const axios = require ("axios");
const {Activity, Country} = require ("../db")
const {Sequelize} = require ("sequelize")


const getAllActivitiesController = async () => {
    const ActivityFind = await Activity.findAll({
      include: {
        model: Country,
        through:{attributes: []},
        attributes: ["name", "image"]
      }
    })
    return ActivityFind;
};

const createActivityController = async (name, difficulty, duration, season, countries) => {
  if (!Array.isArray(countries)) {
    throw new Error('Ponelo entre corchetes a los paises');
  }

  const createactivity = await Activity.create({ name, difficulty, duration, season });

  for (const countryName of countries) {
    const findcountry = await Country.findOne({
      where: { name: { [Sequelize.Op.iLike]: `%${countryName}%` } }
    });

    if (findcountry) {
      await createactivity.addCountry(findcountry);
    }
  }

  return createactivity;
}
     // CMASKDASKDHASKHDASL PRUEBA AKSJDHASKDHLASKJDHLASK EL LIDER LOCO ------FINISH--------
     

        module.exports = { getAllActivitiesController, createActivityController}