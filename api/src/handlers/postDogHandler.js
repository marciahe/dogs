const { Dog, Temperament } = require("../db");

const postDogHandler = async ({
  image,
  name,
  heightMin,
  heightMax,
  weightMin,
  weightMax,
  life_span_min,
  life_span_max,
  temperament,
}) => {
  const existingDog = await Dog.findOne({
    where: {
      name,
    },
  });

  if (!existingDog) {
    //Estoy esperando temperaments como un array
    const temps = temperament.map((temp) => {
      return Temperament.findOne({
        where: {
          name: temp,
        },
      });
    });
    const temperaments = await Promise.all(temps);

    const createDog = await Dog.create({
      name,
      image:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Flifehacker.com%2Fhow-to-hide-a-dog-from-your-landlord-if-you-must-1848650098&psig=AOvVaw0IcGQ2QSb1-hMByfntS0tM&ust=1682635322480000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCKDDyJfPyP4CFQAAAAAdAAAAABAE",
      heightMin,
      heightMax,
      weightMin,
      weightMax,
      life_span: life_span_min + " - " + life_span_max + " years",
    });

    await createDog.setTemperaments(temperaments);

    // Cargar los nombres de los temperamentos
    const tempsNames = (await createDog.getTemperaments()).map(
      (temp) => temp.name
    );

    // Crear un nuevo objeto que incluya los temperamentos como strings
    const dogWithTemps = {
      ...createDog.toJSON(),
      temperaments: tempsNames,
    };

    return dogWithTemps;
  } else {
    throw new Error("There is already a dog with that name");
  }
};

module.exports = postDogHandler;
