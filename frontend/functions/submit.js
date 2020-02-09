const Airtable = require('airtable');

exports.handler = function(event, context, callback) {
    callback(null, {
    statusCode: 200,
    body: "Hello, World"
    });
}

// const saveUser = async ({ name, email, message }) => {
//   return new Promise((resolve, reject) => {
//     const { AT_API_KEY: apiKey, AT_BASE, AT_TABLE } = process.env;

//     Airtable.configure({
//       apiKey
//     });

//     const base = Airtable.base(AT_BASE);
//     // base('Table 1').create([
//     //     {
//     //         "Game Version": "Halo 2",
//     //         "Game Map": "Lockout",
//     //         "Gametype": "Team SWAT"
//     //     },
//     // ], function(err, records) {
//     // if (err) {
//     //     console.error(err);
//     //     return;
//     // }
//     base(AT_TABLE).create({ name, email, message }, err => {
//       if (err) return reject(err);

//       resolve();
//     });
//   });
// };


        // handleAirtableSubmit(){
        //     console.log(formData);
        //     base('Table 1').create([
        //         {
        //             "Game Version": "Halo 2",
        //             "Game Map": "Lockout",
        //             "Gametype": "Team SWAT"
        //         },
        //     ], function(err, records) {
        //     if (err) {
        //         console.error(err);
        //         return;
        //     }
        //     records.forEach(function (record) {
        //         console.log(record.getId());
        //     });
        //     });
        // },