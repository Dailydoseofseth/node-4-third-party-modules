/*  ---------------------------
💎 Leap Year Challenge
------------------------------
Make an app that determines if a given year is a leap year! 

Read the instructions in the README.md file in this folder.
------------------------------ */
// Uses the [Moment.js](https://www.npmjs.com/package/moment) library to determine if the year is a leap year

// import moment node module
import moment from "moment";

// Accepts a year as user input from the command line with `process.argv`
let year = Number(process.argv[2]);
console.log("year", year);
// let nextYear = year + 1;
// let nextYear = Number(process.argv[2] + 1);

// Outputs a friendly message with the result-------

// GOOD CONSOOLE LOG TO TEST IF TRUE OR FALSE:
// moment([2000]).isLeapYear() // true
// console.log(moment([2000]).isLeapYear());

// AI SUGGESTED:
// console.log(moment(year).isLeapYear() ? `${year} is a leap year!` : `${year} is not a leap year.`);

if (!year) {
  console.log("Please enter a valid year.");
} else if (moment([year]).isLeapYear() === true) {
  console.log(`${year} is a leap year!`);
} else {
  console.log(`${year} is not a leap year.`);
}
