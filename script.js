"use strict";

let activities = [];
let dataDaily = {};
let dataWeekly = {};
let dataMonthly = {};

const timeFrames = document.querySelector(".user-timeframes");
const btnDaily = document.querySelector(".btn-daily");
const btnWeekly = document.querySelector(".btn-weekly");
const btnMonthly = document.querySelector(".btn-monthly");

const currentTimingElements = document.querySelectorAll(".card-body h3");
const previousTimingElements = document.querySelectorAll(".card-body p");

// Fetch JSON and populate global data
fetch("data.json")
  .then((response) => {
    if (!response.ok) throw new Error("Network response was not ok");
    return response.json();
  })
  .then((jsonData) => {
    activities = jsonData; // assign to global

    // Extract daily, weekly, and monthly data
    activities.forEach((activity) => {
      dataDaily[activity.title] = activity.timeframes.daily;
      dataWeekly[activity.title] = activity.timeframes.weekly;
      dataMonthly[activity.title] = activity.timeframes.monthly;
    });

    // Set up buttons
    setupButtons();
  })
  .catch((error) => console.error("Error loading data:", error));

//Updating UI
function updateUI(data) {
  //updating current time:
  currentTimingElements.forEach((el) => {
    const key = el.dataset.name; //reading data-key
    //if data-key is the same as object's key, change innerHTML
    if (data[key]) {
      el.innerHTML = `${data[key].current} hrs`;
    }
  });
  //updating previous week:
  previousTimingElements.forEach((el) => {
    const key = el.dataset.name;
    if (data[key]) {
      el.innerHTML = `Last week - ${data[key].previous} hrs`;
    }
  });
}
// Button setup
function setupButtons() {
  timeFrames.addEventListener("click", function (e) {
    if (e.target === btnDaily) {
      updateUI(dataDaily);
    } else if (e.target === btnWeekly) {
      updateUI(dataWeekly);
    } else if (e.target === btnMonthly) {
      updateUI(dataMonthly);
    }
  });
}
