const Person = require("../models/person");

module.exports = {
  getPeople: async () => {
    // Find all people
    //No enviar el id, createdDAte and updateDate
    //const Person = getPersonModel(sequelize, DataTypes);
    return await Person.findAll();
    //console.log("All people:", JSON.stringify(people, null, 2));
  },
  getPersonById: async (personId) => {
    return await Person.findAll({
      where: {
        id: personId,
      },
    });
  },
  updatePersonById: async (personId, personData) => {
    const { firstName, secondName, firstLastName, secondLastName, email } =
      personData;
    //?Validar la data aquí y en el modelo?
    const res = await Person.update({
        firstName,
        secondName,
        firstLastName,
        secondLastName,
        email
    }, {
      where: {
        id: personId,
      },
    });
    const response = {};
    if (res.every((r) => r <= 0)) {
      response.status = 400;
      response.message = "No se pudo actualizar la persona";
    } else {
      response.status = 200;
      response.message = "Persona actualizada correctamente!";
    }
    return response;
  },
  createPerson: async (personData) => {
    const person = await Person.create({
      firstName: personData.firstName,
      secondName: personData.secondName,
      firstLastName: personData.firstLastName,
      secondLastName: personData.secondLastName,
      email: personData.email,
    });
    console.log(person.dataValues);
    if (person instanceof Person) {
      return { status: 201, message: "Persona creada correctamente", "person": person.toJSON() };
    } else {
      return { status: 400, message: "Hubo un error" };
    }
  },
  deletePersonById: async (personId) => {
    const person = await Person.destroy({
      where: {
        id: personId,
      },
    });
    const response = {};
    if (person === 0) {
      response.status = 400;
      response.message = "No existe una persona con ese id";
    } else {
      response.status = 200;
      response.message = "Persona eliminada correctamente!";
    }
    return response;
  },
};
