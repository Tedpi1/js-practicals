document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        // Hover effect: Change background color
        card.addEventListener("mouseenter", () => {
            card.style.backgroundColor = "#e3f2fd";
        });

        card.addEventListener("mouseleave", () => {
            card.style.backgroundColor = "white";
        });

        // Toggle extra details on button click
        const button = card.querySelector(".toggle-btn");
        const extraDetails = card.querySelector(".extra-details");

        button.addEventListener("click", () => {
            if (extraDetails.style.display === "none" || extraDetails.style.display === "") {
                extraDetails.style.display = "block";
                button.textContent = "Hide Details";
            } else {
                extraDetails.style.display = "none";
                button.textContent = "More Details";
            }
        });
    });
});
