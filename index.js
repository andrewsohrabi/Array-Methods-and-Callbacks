import { fifaData } from './fifa.js';

// ⚽️ M  V P ⚽️ //

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 1: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Investigate the data above. Practice accessing data by console.log-ing the following pieces of data note, you may want to filter the data first 😉*/

// const fifa14 = fifaData.filter(function(game) {
//     return game.Year===2014 && game.Stage ==="Final";
// });

const fifa14 = fifaData.filter(game => game.Year===2014 && game.Stage ==="Final");

console.log(fifa14);

//(a) Home Team name for 2014 world cup final

console.log(fifa14[0]['Home Team Name']);

//(b) Away Team name for 2014 world cup final

console.log(fifa14[0]['Away Team Name']);

//(c) Home Team goals for 2014 world cup final
console.log(fifa14[0]['Home Team Goals']);

//(d) Away Team goals for 2014 world cup final
console.log(fifa14[0]['Away Team Goals']);
//(e) Winner of 2014 world cup final */
const winner14 = [];
if (fifa14[0]['Home Team Goals'] > fifa14[0]['Away Team Goals']) {
    winner14.push(fifa14[0]['Home Team Name']);
} else {
    winner14.push(fifa14[0]['Away Team Name'])
}
console.log(winner14);

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */

function getFinals(data) {
   /* code here */
   return fifaData.filter(game => game.Stage ==="Final");
}
//console.log(getFinals(fifaData));


/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(data,getFinals) {
    /* code here */
    const finalGames = getFinals(data);
    const years =[];
    finalGames.forEach(game => years.push(game.Year));
    console.log(`Task3: getYears array: ${years}`)
    return years;

}




/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 

function getWinners(data,getFinals) {
    /* code here */
    const finalsGames = getFinals(data);
    // const winners =[];
    // finalsGames.forEach(function(game) {
    //     if (game['Home Team Goals'] > game['Away Team Goals']) {
    //         winners.push(game['Home Team Name']);
    //     } else {
    //         winners.push(game['Away Team Name'])
    //     }
    // })
    // return winners;

    const winners = finalsGames.map(game => {
        if (game['Home Team Goals'] > game['Away Team Goals']) {
            return game['Home Team Name'];
        } else {
            return game['Away Team Name'];
        }
    })

    console.log(`Task4: getWinners array: ${winners}`)
    return winners;
}
/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 5: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */


function getWinnersByYear(data,getYears,getWinners) {
    /* code here */
    // const finalsGames = getFinals(data);
    const winnerYears = getYears(data); // returns years in dataset
    const winnerNames = getWinners(data); // returns names of winning countries
    // console.log(`winner years are ${winnerYears}`);
    // console.log(`winner names are ${winnerNames}`);
    const winnersByYear = [];
    winnerYears.forEach(function(game,index) {
        winnersByYear.push(`In ${winnerYears[index]}, ${winnerNames[index]} won the world cup!`)
        
    })

    // console.log(winnersByYear);
    return winnersByYear;
}

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {
   /* code here */
   const totalTeamGoals = data.reduce(function(accumulator,item){
        
       return accumulator + item["Home Team Goals"] + item["Away Team Goals"]
   },0)
   console.log(`data length is ${data.length}`) 
   console.log(`total team goals is: ${totalTeamGoals}`)
   return (totalTeamGoals / data.length).toFixed(2);
   
}






/// 🥅 STRETCH 🥅 ///

/* 💪💪💪💪💪 Stretch 1: 💪💪💪💪💪 
Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

}



/* 💪💪💪💪💪 Stretch 2: 💪💪💪💪💪 
Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

}


/* 💪💪💪💪💪 Stretch 3: 💪💪💪💪💪
Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

}


/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */


/* 🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑 */
function foo(){
    console.log('its working');
    return 'bar';
}
export default{
    foo,
    getFinals,
    getYears,
    getWinners,
    getWinnersByYear,
    getAverageGoals
}