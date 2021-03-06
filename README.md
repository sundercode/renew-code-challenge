# Renew Coding Challenge
Renew Financial's coding challenge, hooray!

This is the version of the coding challenge as done by Elise Sunderland. Below are the instructions for setting this up and running it on another machine.

To see the instructions for the project, please see the file `rf-code-challenge` in the repo.

## Installation Instructions
Please be sure that you have both Node and npm installed *https://nodejs.org/en/download/*

If you are using this git repo...

1. Clone this repository into the folder of your choice. `git clone --repo name--`
1. In the project directory, please be sure to use `npm install` to get all correct external packages
1. On the command line, run `npm run dev` to start up the local server at `localhost:8080`.

If you are downloading the project...

1. Open the folder in your downloaded location
1. run `npm install` to double check that all dependencies are present
1. Use the same command as aove to get the local server running

## Tools Used

The following tools were used to create this project
- React
- Webpack
- Babel
- Enzyme
- Mocha
- Lodash
- Moment
- React Day Picker
- React-JsonSchema-Form
- LucidUI
- Bootstrap
- Google Maps APIs
- sunrise-sunset API *http://sunrise-sunset.org/api*

## Usage Instructions

You should be able to run this project right out of the blocks. Here's how the flow should work:

1. Enter a valid address in the first form and press "Submit"
1. You will then get a valid Latitude/Longitude location.
1. Then, select a range of dates from the calendar. Once selected, submit the range of dates.
1. The application will then output a table in UTC time of the various stats about the location, and the timezone will be displayed above the table.

For testing:
1. In the folder directory, run the command `npm test` to see unit testing results.
2. If, for some reason, there is an error thrown about styles, please run a quick `npm i --save-dev ignore-styles` and run the test command again.

## Known Bugs

- Currently the only way to verify valid address submissions are through the API response, so Google will estimate the location for the user
- Timezone adjustments are not made in the displayed table, but timezone is declared at the top of the component.
- Resetting the date range after submitting does not cause a different API request to fire. You must refresh the page to do so.
- Times are only shown in 12-hour time and not 24-hour.
