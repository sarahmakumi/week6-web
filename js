// Button Click Event - Change Text
document.getElementById("changeTextBtn").addEventListener("click", function() {
    document.getElementById("textMessage").innerText = "Glowing skin is always in! ✨";
});

// Hover Effect on Images
document.querySelectorAll(".gallery-img").forEach(img => {
    img.addEventListener("mouseenter", () => img.style.border = "3px solid #ff5722");
    img.addEventListener("mouseleave", () => img.style.border = "none");
});

// Keypress Detection
document.addEventListener("keypress", (event) => {
    console.log("Key pressed:", event.key);
});

// Secret Action - Double Click on Header
document.querySelector(".header").addEventListener("dblclick", () => {
    alert("You're unlocking the secrets of radiant skin! 🌟");
});

// Form Validation - Email & Password
document.getElementById("email").addEventListener("input", function() {
    const emailFeedback = document.getElementById("emailFeedback");
    emailFeedback.innerText = this.validity.valid ? "✅ Valid email!" : "❌ Invalid email format!";
});

document.getElementById("password").addEventListener("input", function() {
    const passwordFeedback = document.getElementById("passwordFeedback");
    passwordFeedback.innerText = this.value.length >= 8 ? "✅ Strong password!" : "❌ Min 8 characters required!";
});
