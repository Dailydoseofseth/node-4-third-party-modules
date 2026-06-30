/* ---------------------------
💎 Sign Finder Challenge
------------------------------
Create a Node.js app that determines the astrological and zodiac signs for the user based on their birthday.

Read the instructions in the README.md file in this folder.
---------------------------- */

// Your app should:

// import functions from horoscope MODULE with destructuring
import { getSign, getZodiac } from "horoscope";

// * take **3 numbers** as user inputs: month, day, and year
//     (e.g., if a user's birthday is June 12, 1990, they would enter `6 12 1990`)
const month = Number(process.argv[2]);
const day = Number(process.argv[3]);
const year = Number(process.argv[4]);

console.log("month", month);
console.log("day", day);
console.log("year", year);

// * output a friendly message with the results, e.g.:
//     "Your astrological sign is Leo and your zodiac sign is Goat."

// * use the [horoscope](https://www.npmjs.com/package/horoscope) 3rd party module to determine:

//   * the **astrological sign** (e.g., Leo)
//   * the **zodiac sign** (e.g., Goat)

// console.log(horoscope.getSign({month: 12, day: 21}))
// 'Sagittarius'

// console.log(horoscope.getZodiac(2016))
// 'Monkey'

if (!month || !day || !year) {
  console.log("Please enter a valid month, day, and year.");
} else {
  const sign = getSign({ month, day });
  const zodiac = getZodiac(year);
  console.log(
    `Your astrological sign is ${sign} and your zodiac sign is ${zodiac}.`,
  );
}
