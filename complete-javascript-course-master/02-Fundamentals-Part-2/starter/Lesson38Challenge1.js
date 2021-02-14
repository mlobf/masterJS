"use strict";

//  Rules.
//  The team only wins if it have the double of the avg the other team
//    otherwise no one wins.
//  1-Calculate of 3 scores using an arrow function.
//  2-Use upper functions to calculate the average for both teams.
//  3-Create a function CheckWinner that takes the average score of
//      each team as parameters and this parameters should be called
//      average Dolphins/Koalas, and based on this two scores the winner
//      must be log on console.
//  4-Use checkWinner to determine the winner of testData1 and testData2.
//  5-Ignore Draws this time.

//testData1 = Dolphins 44,23,71 and Koalas 65,54,49.
//testData2 = Dolphins 85,54,41 and Koalas 23,34,27.

const avgTeam = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const avgDolphinData1 = avgTeam(44, 23, 71);
const avgKoalaData1 = avgTeam(65, 54, 49);

const avgDolphinData2 = avgTeam(85, 54, 41);
const avgKoalaData2 = avgTeam(23, 34, 27);

const nameTeamOne = "Dolphins";
const nameTeamTwo = "Koalas";

console.log(avgDolphinData1, avgKoalaData1);
console.log(avgDolphinData2, avgKoalaData2);

const checkWinner = (avgTeamOne, avgTeamTwo, nameTeamOne, nameTeamTwo) => {
	if (avgTeamOne >= 2 * avgTeamTwo) {
		console.log(`The winner is ${nameTeamOne}, ${avgTeamOne} vs ${avgTeamTwo}`);
	} else if (avgTeamTwo >= 2 * avgTeamOne) {
		console.log(`The winner is ${nameTeamTwo}, ${avgTeamTwo} vs ${avgTeamOne}`);
	} else {
		console.log("Draw Happens!!");
	}
};

checkWinner(avgDolphinData1, avgKoalaData1, nameTeamOne, nameTeamTwo);
checkWinner(avgDolphinData2, avgKoalaData2, nameTeamOne, nameTeamTwo);
