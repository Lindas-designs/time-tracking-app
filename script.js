"use strict";

let activities = []; // global array
let dataDaily = {};
let dataWeekly = {};
let dataMonthly = {};
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
    console.log("Daily Data:", dataDaily);
    // Example: access Work daily data
    console.log("Work daily:", dataDaily["Work"]);
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

/*
let activities = []; // global array

fetch("data.json")
  .then((response) => {
    if (!response.ok) throw new Error("Network response was not ok");
    return response.json();
  })
  .then((data) => {
    activities = data; // assign to global
    console.log("Activities loaded:", activities);
// const dailyActivities=
    // Optional: set up your buttons
    setupButtons();
  })
  .catch((error) => console.error("Error loading data:", error));

// Button setup
function setupButtons() {
  const btnDaily = document.querySelector(".btn-daily");
  const btnWeekly = document.querySelector(".btn-weekly");
  const btnMonthly = document.querySelector(".btn-monthly");

  btnDaily.addEventListener("click", () => {
    console.log("Daily Data");
  });
  btnWeekly.addEventListener("click", () => {
    console.log("Weekly Data");
  });
  btnMonthly.addEventListener("click", () => {
    console.log("Monthly Data");
  });
}
*/
/*
fetch("data.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    return response.json(); // Convert response to a JS object or array
  })
  .then((activities) => {
    console.log(activities);
    activities.forEach((activity) => {
      console.log(activity);
    });
    // use the data here
  })
  .catch((error) => {
    console.error("Error:", error);
  });*/
/*
let activities = []; // global

async function loadData() {
  try {
    const response = await fetch("data.json");
    if (!response.ok) throw new Error("Network response was not ok");
    activities = await response.json(); // assign to global
    console.log("Activities loaded:", activities);
    renderDashboard();
  } catch (error) {
    console.error("Error:", error);
  }
}

loadData();

const timeFrames = document.querySelector(".user-timeframes");
const btnDaily = document.querySelector(".btn-daily");
const btnWeekly = document.querySelector(".btn-weekly");
const btnMonthly = document.querySelector(".btn-monthly");

//Getting Daily Data:
console.log(`Daily Data:${activities}`);
//Getting Weekly Data:
//Getting Monthly Data:

//Daily/weekly/monthly button event listener
timeFrames.addEventListener("click", function (e) {
  if (e.target === btnDaily) {
    console.log("btnDaily");
  }

  if (e.target === btnWeekly) {
    console.log("btnWeekly");
  }
  if (e.target === btnMonthly) {
    console.log("btnMonthly");
  }
});*/

//   ⚙️ 2. Validate before using the data

// APIs or files can change, break, or return null.
// So before accessing properties, check that they exist.

// ✅ Example:

// if (data && Array.isArray(data)) {
//   data.forEach(user => {
//     if (user.name) console.log(user.name);
//   });
// }
// ❌ Don’t assume your data will always look correct.

/*
function loadJSON(url) {
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error(`Failed to load ${url}: ${response.statusText}`);
    }
    return response.json(); // Convert response to JS object
  });
}
loadJSON("data.json")
  .then((data) => {
    console.log("Loaded JSON:", data);
  })
  .catch((err) => console.error("Error:", err));*/
