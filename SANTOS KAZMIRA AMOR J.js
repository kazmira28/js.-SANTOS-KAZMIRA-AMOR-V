1. ageCheck.js
const age = parseInt(prompt("Enter your age:"));

if (age < 13) {
    console.log("You are a child.");
} else if (age >= 13 && age <= 19) {
    console.log("You are a teenager.");
} else {
    console.log("You are an adult.");
}
2. gradeAssignment.js
javascript
const score = parseInt(prompt("Enter your score:"));

if (score >= 90) {
    console.log("Your grade is: Excellent.");
} else if (score >= 80) {
    console.log("Your grade is: Good.");
} else if (score >= 70) {
    console.log("Your grade is: Fair.");
} else {
    console.log("Your grade is: Needs Improvement.");
}
3. taskCalendar.js
const day = prompt("Enter a day of the week:");

switch (day.toLowerCase()) {
    case "monday":
        console.log("Your task for Monday is: Finish your assignments.");
        break;
    case "tuesday":
        console.log("Your task for Tuesday is: Attend your classes.");
        break;
    case "wednesday":
        console.log("Your task for Wednesday is: Study for your exams.");
        break;
    case "thursday":
        console.log("Your task for Thursday is: Complete group projects.");
        break;
    case "friday":
        console.log("Your task for Friday is: Prepare for the weekend.");
        break;
    case "saturday":
        console.log("Your task for Saturday is: Relax and recharge.");
        break;
    case "sunday":
        console.log("Your task for Sunday is: Plan for the week ahead.");
        break;
    default:
        console.log("Invalid day entered.");
}
4. evenNumbers.js
console.log("Even numbers between 1 and 10:");
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
5. numberGuess.js
const correctNumber = Math.floor(Math.random() * 10) + 1;
let guess;

do {
    guess = parseInt(prompt("Guess a number between 1 and 10:"));
    if (guess < correctNumber) {
        console.log("Too low!");
    } else if (guess > correctNumber) {
        console.log("Too high!");
    }
} while (guess !== correctNumber);

console.log("Correct!");
6. passwordPrompt.js
const correctPassword = "correctPassword";
let inputPassword;

do {
    inputPassword = prompt("Enter your password:");
    if (inputPassword !== correctPassword) {
        console.log("Incorrect, try again.");
    }
} while (inputPassword !== correctPassword);

console.log("Access granted.");
