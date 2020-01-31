'use strict';

const app = require( 'express' )();
const express = require( 'express' );
const routes = require( './routes' );
const health = require( './routes/health' );
const path = require( 'path' );

if ( process.env.NODE_ENV === 'development' ) {
    const cors = require( 'cors' );
    app.use( cors() );
}

app.all( '/api/*', routes );

app.get( '/health', health );

app.use( express.static( path.resolve( __dirname, './public' ) ) );

app.use( ( req, res ) => res.status( 404 ).send( 'Not Found' ) );

const listen = ( log ) => {
    return app.listen( process.env.PORT, () => {
        console.log( log );
    });
};

module.exports = () => {
    return listen( `Server listening on port ${ process.env.PORT }` );
};

