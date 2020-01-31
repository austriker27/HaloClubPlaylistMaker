'use strict';

const dbAccess = {};

dbAccess.read = ( db, query ) => {
    return new Promise( ( resolve, reject ) => {
        db.serialize( () => {
            db.all( query, ( err, rows ) => {
                if ( err ) {
                    reject( err.message );
                }
                resolve( rows );
            });
        });
    });
};

dbAccess.readOne = ( db, query ) => {
    return new Promise( ( resolve, reject ) => {
        db.serialize( () => {
            db.get( query, ( err, row ) => {
                if ( err ) {
                    reject( err.message );
                }
                resolve( row );
            });
        });
    });
};

dbAccess.runCommand = ( db, command ) => {
    return new Promise( ( resolve, reject ) => {
        db.run( command, ( err, row ) => {
            if ( err ) {
                reject( err.message );
            }
            resolve( row );
        });
    });
};

module.exports = dbAccess;
