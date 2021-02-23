let superChimpOne = {
    name: "Chad",
    species: "Chimpanzee",
    mass: 9,
    age: 6
};

let salamander = {
    name: "Lacey",
    species: "Axolotl Salamander",
    mass: 0.1,
    age: 5
};

let animal1 = {
   name : "Brad",
   species:"Chimpanzee",
   mass:11,
   age:6,
   astronautID:1,
   move: function () {return Math.floor(Math.random()*11)}
};
let animal2 = {
   name : "Leroy",
   species:"Beagle",
   mass:14,
   age:6,
   astronautID:2,
   move: function () {return Math.floor(Math.random()*11)}
};
let animal3 = {
   name : "Almina",
   species:"Tardigrade",
   mass:0.0000000001,
   age:1,
   astronautID:3,
   move: function () {return Math.floor(Math.random()*11)}
};

let crew = [animal1, animal2, animal3];
for (item in animal1) {
   console.log(item + ", " + animal1[item]);
}
function fitnessTest(candidates){
 let results = [], numSteps, turns;
 for (let i = 0; i < candidates.length; i++){
     numSteps = 0;
     turns = 0;
     while(numSteps < 20){
     numSteps += candidates[i].move();
     turns++;
     }
     results.push(`${candidates[i].name} took ${turns} turns to take 20 steps.`);
 }
 return results;
}
console.log(fitnessTest(crew));
// After you have created the other object literals, add the astronautID property to each one.

// Create an array to hold the animal objects.

// Print out the relevant information about each animal.

// Start an animal race!