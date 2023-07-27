document.getElementById("saveBtn").addEventListener("click", function() {
    const name = document.getElementById("name").value;
    const age = parseInt(document.getElementById("age").value);
  
    // Create an object with the entered data
    const person = { name, age };
  
    // Get the existing data from local storage, or initialize an empty array if no data is present
    let peopleData = JSON.parse(localStorage.getItem("peopleData")) || [];
  
    // Add the new person object to the array
    peopleData.push(person);
  
    // Save the updated array back to local storage
    localStorage.setItem("peopleData", JSON.stringify(peopleData));
  
    // Show success message
    showMessage("Data saved successfully!");
  });
  
  function showMessage(message) {
    const messageDiv = document.getElementById("message");
    messageDiv.textContent = message;
  }
  