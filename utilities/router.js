const router = require('express').Router();

const index_file = __dirname + "/static/views/index.html";

router.get('/', (_, res) => {
	res.sendFile(index_file);
});