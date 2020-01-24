'use strict';

const dbAccess = require( '../helpers/sqlite' );
const sqlite3 = require( 'sqlite3' );

module.exports = async ( req, res ) => {

    try {

        const body = req.body;

        const db = new sqlite3.Database( './db/halofest.db', sqlite3.OPEN_READWRITE, ( err ) => {
            if ( err ) {
                console.error( err.message );
            }
        // console.log( 'Connected to the database.' );
        });

        const readCommand = `SELECT * FROM playlist WHERE game = '${ body.game }' AND gameType = '${ body.gameType }' AND map = '${ body.map }'`;
        const matchingRow = await dbAccess.readOne( db, readCommand );

        let runCommand;
        if ( !matchingRow ) {
            runCommand = `INSERT INTO playlist (game, gameType, map, popularity) VALUES( '${ body.game }', '${body.gameType}', '${ body.map}', 1 )`;
        } else {
            runCommand = `UPDATE playlist SET popularity = ${ matchingRow.popularity + 1 } WHERE id = ${ matchingRow.id }`;
        }

        await dbAccess.runCommand( db, runCommand );
        const rows = await dbAccess.read( db, `SELECT * FROM playlist` );
        db.close( ( err ) => {
            if ( err ) {
                console.error( err.message );
            }
        // console.log( 'Close the database connection.' );
        });

        res.status( 200 ).json({ "Message": "Good", "Playlist": rows });
    } catch ( err ) {
        console.log( err );
        res.status( 400 ).send( "Unknown error" );
        return;
    }
};
