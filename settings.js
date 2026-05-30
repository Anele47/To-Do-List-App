  const theme =
      document.getElementById("theme");

    /* THEME */

    theme.addEventListener("change", () => {

      if(theme.value === "light"){
        document.body.classList.add("light-mode");
      }
      else{
        document.body.classList.remove("light-mode");
      }

    });

    /* SAVE SETTINGS */

    function saveSettings(){

      localStorage.setItem(
        "username",
        document.getElementById("username").value
      );

      localStorage.setItem(
        "email",
        document.getElementById("email").value
      );

      localStorage.setItem(
        "theme",
        theme.value
      );

      localStorage.setItem(
        "fontSize",
        document.getElementById("fontSize").value
      );

      localStorage.setItem(
        "emailNotify",
        document.getElementById("emailNotify").checked
      );

      localStorage.setItem(
        "taskReminder",
        document.getElementById("taskReminder").checked
      );

      localStorage.setItem(
        "desktopNotify",
        document.getElementById("desktopNotify").checked
      );

      localStorage.setItem(
        "showCompleted",
        document.getElementById("showCompleted").checked
      );

      localStorage.setItem(
        "animations",
        document.getElementById("animations").checked
      );

      localStorage.setItem(
        "autosave",
        document.getElementById("autosave").checked
      );

      localStorage.setItem(
        "twofactor",
        document.getElementById("twofactor").checked
      );

      localStorage.setItem(
        "remember",
        document.getElementById("remember").checked
      );

      const message =
        document.getElementById("message");

      message.style.display = "block";

      setTimeout(() => {
        message.style.display = "none";
      },3000);

    }

    /* LOAD SETTINGS */

    window.onload = function(){

      document.getElementById("username").value =
        localStorage.getItem("username") || "";

      document.getElementById("email").value =
        localStorage.getItem("email") || "";

      theme.value =
        localStorage.getItem("theme") || "dark";

      document.getElementById("fontSize").value =
        localStorage.getItem("fontSize") || "Medium";

      document.getElementById("emailNotify").checked =
        localStorage.getItem("emailNotify") === "true";

      document.getElementById("taskReminder").checked =
        localStorage.getItem("taskReminder") === "true";

      document.getElementById("desktopNotify").checked =
        localStorage.getItem("desktopNotify") === "true";

      document.getElementById("showCompleted").checked =
        localStorage.getItem("showCompleted") !== "false";

      document.getElementById("animations").checked =
        localStorage.getItem("animations") !== "false";

      document.getElementById("autosave").checked =
        localStorage.getItem("autosave") !== "false";

      document.getElementById("twofactor").checked =
        localStorage.getItem("twofactor") === "true";

      document.getElementById("remember").checked =
        localStorage.getItem("remember") === "true";

      /* APPLY THEME */

      if(theme.value === "light"){
        document.body.classList.add("light-mode");
      }

    }