"use strict";

let activities = [];
let dataDaily = {};
let dataWeekly = {};
let dataMonthly = {};
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

    console.log("Activities loaded:", activities);
    console.log("Daily data:", dataDaily);
    console.log("Weekly data:", dataWeekly);
    console.log("Monthly data:", dataMonthly);

    // Set up buttons
    setupButtons();
  })
  .catch((error) => console.error("Error loading data:", error));

// Button setup
function setupButtons() {
  const btnDaily = document.querySelector(".btn-daily");
  const btnWeekly = document.querySelector(".btn-weekly");
  const btnMonthly = document.querySelector(".btn-monthly");

  btnDaily.addEventListener("click", () => {
    currentTimingElements.forEach((el) => {
      const key = el.dataset.name; //reading data-key
      //if data-key is the same as object's key, change innerHTML
      if (dataDaily[key]) {
        el.innerHTML = `${dataDaily[key].current} hrs`;
      }
    });
    previousTimingElements.forEach((el) => {
      const key = el.dataset.name;
      if (dataDaily[key]) {
        el.innerHTML = `Last week - ${dataDaily[key].previous} hrs`;
      }
    });
  });

  btnWeekly.addEventListener("click", () => {
    console.log("Weekly Data:", dataWeekly);
    console.log("Work weekly:", dataWeekly["Work"]);
  });

  btnMonthly.addEventListener("click", () => {
    console.log("Monthly Data:", dataMonthly);
    console.log("Work Monthly:", dataMonthly["Work"]);
  });
}

// const headings = document.querySelectorAll(".card-body h3");

// headings.forEach((h3) => {
//   const key = h3.dataset.key; // reads data-key
//   if (data.daily[key]) {
//     h3.innerHTML = data.daily[key].current; // set content
//   }
// });
