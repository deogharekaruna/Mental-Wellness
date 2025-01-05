// Add interaction when the "Join the Forum" button is clicked
document.addEventListener("DOMContentLoaded", function () {
    const forumButton = document.querySelector("#community-forum button");

    forumButton.addEventListener("click", function () {
        // Alert the user
        alert("Redirecting you to the Community Forum. Connect and share!");

        // Optional: Add delay before redirection for better user experience
        setTimeout(() => {
            window.location.href = "forum.html"; // Redirect to forum page
        }, 1000); // 1-second delay
    });
});