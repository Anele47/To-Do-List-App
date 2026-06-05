 const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const loginBtn = document.getElementById("loginbtn");

function showRegister() {
  loginForm.classList.remove("active");
  registerForm.classList.add("active");
}

function showLogin() {
  registerForm.classList.remove("active");
  loginForm.classList.add("active");
}

/* Login Button */
loginBtn.addEventListener("click", function () {

  // Redirect to home page
  window.location.href = "home.html";

});

 const forgotLink = document.getElementById("forgotLink");

        forgotLink.addEventListener("click", function(event){

            event.preventDefault();

            const email = prompt("Enter your email address:");

            if(email){

                const message = document.getElementById("message");

                message.style.display = "block";

                message.textContent =
                    "Password reset link sent to " + email;
            }
        });
// Local Storage

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

window.addEventListener("DOMContentLoaded", () => {

  const savedTheme =
    localStorage.getItem("theme") || "dark";

  if (savedTheme === "light") {
    document.body.classList.add("light-mode");
  }

  const savedFontSize =
    localStorage.getItem("fontSize") || "Medium";

  document.body.classList.remove(
    "small-font",
    "medium-font",
    "large-font"
  );

  if (savedFontSize === "Small") {
    document.body.classList.add("small-font");
  }
  else if (savedFontSize === "Large") {
    document.body.classList.add("large-font");
  }
  else {
    document.body.classList.add("medium-font");
  }

});


