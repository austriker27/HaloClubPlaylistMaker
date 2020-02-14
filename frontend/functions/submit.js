const Airtable = require('airtable');
const { AIRTABLE_KEY, AIRTABLE_BASE, AIRTABLE_TABLE } = process.env;
const base = new Airtable({apiKey: AIRTABLE_KEY}).base(AIRTABLE_BASE);

exports.handler = function(event, context, callback) {
    // take data from submit and send to airtable and create reports
    const urlParams = new URLSearchParams(event.body);

     base(AIRTABLE_TABLE).create([
         {
            "fields": {
                "Game Version": urlParams.get("Game Version"),
                "Game Map": urlParams.get("Game Map"),
                "Gametype": urlParams.get("Gametype"),

            }
        },
     ], function(err, records) {
        if (err) {
            console.error(err);
            return;
        }
        records.forEach(function (record) {
            console.log(record.getId());
        });
    });

    callback(null, {
        statusCode: 200,
        body: null
    });

}
