'use strict';

const sqlite3 = require( 'sqlite3' );
const dbAccess = require( '../helpers/sqlite' );
const config = require( '../config' );

module.exports = async ( req, res ) => {

    try {
        const db = new sqlite3.Database( config.DB_PATH, sqlite3.OPEN_READWRITE, ( err ) => {
            if ( err ) {
                console.error( err.message );
            }
            // console.log( 'Connected to the database.' );
        });

        const rows = await dbAccess.read( db, `SELECT * FROM playlist` );

        db.close( ( err ) => {
            if ( err ) {
                console.error( err.message );
            }
        });

        res.status( 200 ).json({ "Message": "Good", "Playlist": rows });
    } catch ( err ) {
        console.log( err );
        res.status( 400 ).send( "Unknown error" );
        return;
    }
};

