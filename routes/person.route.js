const { Router } = require("express");
const personController = require("../controllers/person.controller");
const router = Router();

router.get("/", personController.getPeople);
router.get("/:personId", personController.getPersonById);
router.post("/", personController.createPerson);
router.put("/:personId", personController.updatePerson);
router.delete("/:personId", personController.deletePerson);

module.exports = router;