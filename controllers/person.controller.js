const personService = require('../services/person.service')

module.exports = {
    getPeople: async (req, res) => {
        const people = await personService.getPeople();
        res.status(200);
        res.json(people);
    },
    updatePerson: async (req, res) => {
        const {personId} = req.params;
        const resp = await personService.updatePersonById(personId, req.body);
        const {status, message} = resp
        res.status(status);
        res.json({
            message
        });
    },
    createPerson: async (req, res) => {
        const resp = await personService.createPerson(req.body);
        const {status, message} = resp
        res.status(status);
        res.json({
           message
        });
    },
    deletePerson: async (req, res) => {
        const { personId } = req.params;
        const resp = await personService.deletePersonById(personId);
        const {status, message} = resp
        res.status(status);
        res.json({
            message
        });
    }


}