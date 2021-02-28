const router = require('express').Router();
const { RenderFile } = require('./util');

router.get('/', (_, res) => {
	RenderFile(res, 'index.html');
});

router.get('/solo', (_, res) => {
	RenderFile(res, 'solo.html')
});

router.get('/multiplayer', (_, res) => {
	RenderFile(res, 'multiplayer.html')
});


module.exports = router;