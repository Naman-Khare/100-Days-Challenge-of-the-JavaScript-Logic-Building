let iPass = document.getElementById("password");
let toggleBtn = document.getElementById("toggleBtn");
let status = document.getElementById("status");

toggleBtn.addEventListener("click", () => {
    togglePassword();
});

function togglePassword() {
    if (iPass.type === "password") {
        iPass.type = "text";
        toggleBtn.textContent = "Hide";
        status.textContent = "Password is visible.";
    } else {
        iPass.type = "password";
        toggleBtn.textContent = "Show";
        status.textContent = "Password is hidden.";
    }
}