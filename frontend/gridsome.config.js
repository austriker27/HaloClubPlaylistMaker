// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Woodinville Halofest',
  plugins: [
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
