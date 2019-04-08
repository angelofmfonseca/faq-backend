'use strict';

module.exports = class FAQController {
	constructor() {}

	enableRoutes(router) {
		router.get("/testar", (req, res) => {
			res.send("teste")
		});
	}
}