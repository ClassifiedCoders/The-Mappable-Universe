const ejsData = require('./ejsData');

function RenderFile(res, file, ...data) {
	res.render(__dirname.replace('utilities', 'static/views/') + file, { ...ejsData, ...data });
}

module.exports = {
	RenderFile
}