'use strict';

if ( process.env.NODE_ENV === 'development' ) {
	require( 'dotenv' ).config();
}

require( './src/app' )();
