//Greetings
let welcome;
let date = new Date();
let hour = date.getHours();
let minute = date.getMinutes();
let second = date.getSeconds();

if (minute < 10) {
  minute = `0 ${minute}`;
}

if (second < 10) {
  second = `0 ${second}`;
}

if (hour < 12) {
  welcome = 'Good Morning';
} else if (hour < 17) {
  welcome = 'Good Afternoon';
} else {
  welcome = 'Good Evening';
}

let greetings = document.querySelector('.greetings');
greetings.textContent = welcome;

//Age Calc
let currentYear = date.getFullYear();
let yearOfBirth = 1986;

let age = currentYear - yearOfBirth;

let showAge = document.querySelector('.age');
showAge.textContent = age;
