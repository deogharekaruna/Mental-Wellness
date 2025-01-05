

/*document.addEventListener("DOMContentLoaded", () => {
  const loginIcon = document.getElementById("login-icon");
  const loginOverlay = document.getElementById("login-overlay");
  const closeBtn = document.getElementById("close-btn");
  const loginBtn = document.getElementById("login-btn");
  const searchBtn = document.getElementById("search-btn");
  const doctorSearchInput = document.getElementById("doctor-search");
  const loadingIndicator = document.getElementById("loading");
  const doctorResults = document.getElementById("doctor-results");

  // Open login form
  loginIcon.addEventListener("click", () => {
    loginOverlay.classList.remove("hidden");
  });

  // Close login form
  closeBtn.addEventListener("click", () => {
    loginOverlay.classList.add("hidden");
  });

  // Simulate login functionality
  loginBtn.addEventListener("click", () => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username && password) {
      alert(Welcome, ${username}!);
      loginOverlay.classList.add("hidden");
    } else {
      alert("Please enter both username and password.");
    }
  });

  // Search functionality
  searchBtn.addEventListener("click", () => {
    const searchQuery = doctorSearchInput.value.trim();
    if (!searchQuery) {
      alert("Please enter a search term.");
      return;
    }

    // Show loading indicator
    loadingIndicator.classList.remove("hidden");
    doctorResults.classList.add("hidden");

    // Simulate an API call
    setTimeout(() => {
      loadingIndicator.classList.add("hidden");
      doctorResults.classList.remove("hidden");

      // Generate mock results
      doctorResults.innerHTML = `
        <h3>Search Results for "${searchQuery}":</h3>
        <ul>
          <li>Dr. John Doe - Cardiologist - New York</li>
          <li>Dr. Jane Smith - Pediatrician - Los Angeles</li>
          <li>Dr. Mike Johnson - Orthopedic - Chicago</li>
        </ul>
      `;
    }, 2000);
  });
});*/

// Interactivity for the Find a Doctor section
document.addEventListener("DOMContentLoaded", () => {
  const searchBtn = document.getElementById("search-btn");
  const doctorSearch = document.getElementById("doctor-search");
  const doctorResults = document.getElementById("doctor-results");

  searchBtn.addEventListener("click", () => {
    const query = doctorSearch.value.trim();

    if (query === "") {
      alert("Please enter a location or specialty to search for doctors.");
    } else {
      alert(Searching for doctors near: "${query}".);
      
      // Show the results (this is static for now)
      doctorResults.classList.remove("hidden");
    }
  });
});


// Add interactivity to Emergency Resources links
document.addEventListener("DOMContentLoaded", () => {
  const helplineLink = document.querySelector("#helpline");
  const supportCenterLink = document.querySelector("#support-center");
  const textHelp = document.querySelector("#text-help");

  // Helpline link alert
  helplineLink.addEventListener("click", (e) => {
      e.preventDefault();
      alert("Calling the Crisis Helpline: 123-456-7890");
      window.location.href = helplineLink.href;
  });

  // Support Center link alert
  supportCenterLink.addEventListener("click", () => {
      alert("You are being redirected to the Support Center website.");
  });

  // Text Help alert
  textHelp.addEventListener("click", () => {
      alert("Text 'HELP' to 12345 for immediate assistance.");
  });
});