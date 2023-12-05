document.addEventListener("DOMContentLoaded", function () {
    const signupForm = document.getElementById("signupForm");
    const loginForm = document.getElementById("loginForm");
  
    if (signupForm) {
      signupForm.addEventListener("submit", function (event) {
        event.preventDefault();
        handleSignup();
      });
    }
  
    if (loginForm) {
      loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        handleLogin();
      });
    }
  
    function handleSignup() {
      // Retrieve form data
      const username = document.getElementById("username").value;
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
  
      // TODO: Perform validation
  
      // Send the form data to the server using fetch or another AJAX method
      fetch("/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      })
        .then(response => response.json())
        .then(data => {
          // Handle the server response, e.g., display a success message
          console.log(data.message);
        })
        .catch(error => {
          // Handle errors
          console.error("Error:", error);
        });
    }
  
    function handleLogin() {
      // Retrieve form data
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;
  
      // TODO: Perform validation
  
      // Send the form data to the server using fetch or another AJAX method
      fetch("/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      })
        .then(response => response.json())
        .then(data => {
          console.log(data.message);
        })
        .catch(error => {
          console.error("Error:", error);
        });
    }
  });
  