// let count = 0;

// console.log(count);

// let myAge = 19;
// // console.log(myAge);

// let humanDogRatio = 7;

// let count = myAge * humanDogRatio;

// let bonusPoints = 50;
// bonusPoints = bonusPoints + 50;

// console.log(bonusPoints);
// bonusPoints = bonusPoints - 75;
// console.log(bonusPoints);

// bonusPoints = bonusPoints + 45;
// console.log(bonusPoints);

// function fortytwo() {
//   console.log(42);
// }

// // fortytwo();

// let lap1 = 34;
// let lap2 = 33;
// let lap3 = 36;

// // Create a function that logs out the sum of all the lap times
// function total_lap_time() {
//   let total_lap = lap1 + lap2 + lap3;
//   console.log(total_lap);
// }

// total_lap_time();

// People counter code start

let count_el = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let count = 0;
function increment() {
  count += 1;
  count_el.textContent = count;
}

function save() {
  saveEl.textContent += count + " - ";
  count = 0;
  count_el.textContent = count;
}

// // People counter code end

// let username = "Anushka";

// let message = "You have three new notifications";
// // console.log(username + ", " + message);

// let messageToUser = username + ", " + message;
// console.log(messageToUser);

// let greeting = "Hi, my name is";

// let myGreeting = greeting + " " + username;

// console.log(myGreeting);

// Greeting message code started

// let welcomeEl = document.getElementById("welcome-el");
// let name = "Anushka";
// let greeting =
//   "Hi " + name + ", " + "Welcome to the Javascript Beginner course";

// welcomeEl.innerText = greeting;

// // welcomeEl.innerText = welcomeEl.innerText + " 👋";

// welcomeEl.innerText += " 👋";

// Greeting message code ended
