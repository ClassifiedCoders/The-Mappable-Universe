const router = require('express').Router();
const srnet = require("srnet-server");
const server = new srnet
();
router.use('/', server);