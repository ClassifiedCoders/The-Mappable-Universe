const router = require('express').Router();
const { RenderFile } = require('./util');

router.get('/', (_, res) => {
	RenderFile(res, 'index.html');
});
router.use("/scripts",require("express").static("./static/script"));
router.use("/styles",require("express").static("./static/styles"));

module.exports = router;