const router = require("express").Router();
const locationController = require("./controller");

router.post("/fetch", locationController);

module.exports = router;