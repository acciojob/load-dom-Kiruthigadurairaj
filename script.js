//your JS code here. If required.
document.addEventListener("DOMContentLoaded", () => {
    // Create a paragraph element
    const message = document.createElement("p");
    message.textContent = "DOM load success"; // Set the message text
    
    // Append the paragraph to the body
    document.body.appendChild(message);
});
