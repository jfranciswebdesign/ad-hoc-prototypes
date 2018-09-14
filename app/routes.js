const express = require( 'express' )
const router = express.Router()

// Add your routes here - above the module.exports line
require( './routes/routes-scrs.js' )( router )

module.exports = router