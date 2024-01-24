'use strict';

function selectRandomly(array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

function tellFortune(numKids, partnerNames, locations, jobTitles) {
  var randomNumKids = selectRandomly(numKids);
  var randomPartnerName = selectRandomly(partnerNames);
  var randomLocation = selectRandomly(locations);
  var randomJobTitle = selectRandomly(jobTitles);

  return "You will be a " + randomJobTitle + " in " + randomLocation +
    ", married to " + randomPartnerName + " with " + randomNumKids + " kids.";
}

function main() {
  const numKids = ["1", "2", "3", "4", "5"];
  const partnerNames = ["Alice", "Bob", "Charlie", "Daisy", "Ethan"];
  const locations = ["New York", "London", "Paris", "Tokyo", "Sydney"];
  const jobTitles = ["Engineer", "Artist", "Doctor", "Teacher", "Chef"];

  console.log(tellFortune(numKids, partnerNames, locations, jobTitles));
  console.log(tellFortune(numKids, partnerNames, locations, jobTitles));
  console.log(tellFortune(numKids, partnerNames, locations, jobTitles));
}

main();
