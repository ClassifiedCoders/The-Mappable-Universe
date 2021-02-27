const ejsData = require('./ejsData')

module.exports = {
	RenderFile(res, file, ...data) {
		res.render(__dirname.replace('utilities', 'public/views/') + file, { ...ejsData, ...data });
	},
}