"use strict";

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
  });

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
