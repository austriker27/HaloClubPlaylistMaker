'use strict';

const router = require( 'express' ).Router();
const bodyparser = require( 'body-parser' );

const health = require( './health' );
const submit = require( './submit' );
const playlist = require( './get-playlist' );

router.get( '/api/health', health );
router.post( '/api/submit', bodyparser.json(), submit );
router.get( '/api/playlist', playlist );

module.exports = router;

