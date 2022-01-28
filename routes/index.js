const router = require('express').Router();
const htmlRoutes = require("./htmlRoutes")
const apiRoutes = require("./apiRoutes")

/**
 * import routes
 */
router.use("/api",apiRoutes)
router.use(htmlRoutes)

module.exports = router