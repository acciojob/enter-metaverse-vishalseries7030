//your JS code here. If required.
const enterBtn = document.getElementById("enterBtn");

enterBtn.addEventListener("click", () => {
    const status = document.getElementById("status");

    // Create a new h1 element
    const newHeading = document.createElement("h1");
    newHeading.id = "status"; // Maintain the same ID
    newHeading.textContent = "Entered Metaverse";

    // Replace the <p> with <h1>
    status.replaceWith(newHeading);
});
