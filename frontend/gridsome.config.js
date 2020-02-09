// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Woodinville Halofest',
  plugins: [
    //   {
    //   use: '@gridsome/source-airtable',
    //   options: {
    //     // Add these to a .env file
    //     // Details on finding these values can be found at:
    //     // https://gridsome.org/plugins/@gridsome/source-airtable
    //     apiKey: process.env.AIRTABLE_KEY, //required
    //     baseId: process.env.AIRTABLE_BASE, //required
    //     tableName: '2020_02_15', //required
    //     typeName: 'Event', //required - needs to match template name
    //     route: '/events/:name' //optional
    //   }
    // },
    // {
    //     use: 'gridsome-plugin-purgecss',
    //     // default options, the following will be included if you don't provide anything
    //     options: {
    //         content: [
    //             './src/**/*.vue',
    //             './src/**/*.js',
    //             './src/**/*.jsx',
    //             './src/**/*.pug',
    //             './src/**/*.md'
    //         ],
    //         defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || [],
    //     }
    // },
    {
      use: 'gridsome-plugin-tailwindcss',
      /* These are the default options. You don't need to set any options to get going.
      options: {
        tailwindConfig: './some/file/js',
        purgeConfig: {},
        presetEnvConfig: {},
        shouldPurge: true,
        shouldImport: true,
        shouldTimeTravel: true
      }
      */
    }
  ]
}
