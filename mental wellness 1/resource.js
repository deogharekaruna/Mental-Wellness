document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("resource-search");
    const searchBtn = document.getElementById("search-btn");
    const categoryBtns = document.querySelectorAll(".category-btn");
    const resourceCards = document.querySelectorAll(".resource-card");
  
    // Search Functionality
    searchBtn.addEventListener("click", () => {
      const query = searchInput.value.toLowerCase();
      resourceCards.forEach(card => {
        const title = card.querySelector("h4").textContent.toLowerCase();
        card.style.display = title.includes(query) ? "block" : "none";
      });
    });
  
    // Filter by Category
    categoryBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        const category = btn.getAttribute("data-category");
        resourceCards.forEach(card => {
          if (category === "all" || card.getAttribute("data-category") === category) {
            card.style.display = "block";
          } else {
            card.style.display = "none";
          }
        });
      });
    });
  });