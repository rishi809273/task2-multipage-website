/* ===============================
   LOAD HEADER
================================ */
fetch("header.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("header").innerHTML = data;

    // Header load hone ke baad hi init functions call karo
    initNavbar();
    initDarkMode();
  });

/* ===============================
   LOAD FOOTER
================================ */
fetch("footer.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("footer").innerHTML = data;
  });

/* ===============================
   NAVBAR + ACTIVE MENU
================================ */
function initNavbar() {
  const navbar = document.getElementById("navbar");
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    // Navbar scroll background
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }

    // Active menu
    let current = "";
    sections.forEach(section => {
      if (window.scrollY >= section.offsetTop - 120) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href").includes(current)) {
        link.classList.add("active");
      }
    });
  });
}

/* ===============================
   DARK MODE (LOCAL STORAGE)
================================ */
function initDarkMode() {
  const toggleBtn = document.getElementById("darkToggle");

  if (!toggleBtn) return;

  // Apply saved theme
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark");
    toggleBtn.textContent = "☀️";
  }

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
      toggleBtn.textContent = "☀️";
    } else {
      localStorage.setItem("theme", "light");
      toggleBtn.textContent = "🌙";
    }
  });
}

/* ===============================
   CONTACT FORM VALIDATION
================================ */
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");

  if (!form) return; // agar contact page nahi hai

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let valid = true;

    if (name === "") {
      document.getElementById("nameError").innerText = "Name is required";
      valid = false;
    } else {
      document.getElementById("nameError").innerText = "";
    }

    if (email === "" || !email.includes("@")) {
      document.getElementById("emailError").innerText = "Enter a valid email";
      valid = false;
    } else {
      document.getElementById("emailError").innerText = "";
    }

    if (valid) {
      alert("Form submitted successfully!");
      form.reset();
    }
  });
});

window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");

  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});
