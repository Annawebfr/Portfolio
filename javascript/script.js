
/**script fenetres modal about me et skills **/
<script>
      document.addEventListener("DOMContentLoaded", () => {
  // About Me Modal
  const openAbout = document.getElementById("openAboutModal");
  const modalAbout = document.getElementById("aboutModal");
  const closeAbout = document.getElementById("closeAboutModal");
  const goToSkills = document.getElementById("goToSkills");

  // Ouvrir la modale "About Me"
  if (openAbout) {
    openAbout.addEventListener("click", () => {
      modalAbout.style.display = "block";
    });
  }

  // Fermer la modale "About Me" avec la croix
  if (closeAbout) {
    closeAbout.addEventListener("click", () => {
      modalAbout.style.display = "none";
    });
  }

  // Fermer la modale "About Me" et défiler vers la section Skills
  if (goToSkills) {
    goToSkills.addEventListener("click", (e) => {
      e.preventDefault(); // Empêche le comportement par défaut du lien
      modalAbout.style.display = "none"; // Ferme la modale
      document.getElementById("skills").scrollIntoView({ behavior: "smooth" }); // Fait défiler la page
    });
  }

  // Fermer la modale "About Me" en cliquant à l'extérieur de la modale
  window.addEventListener("click", (e) => {
    if (e.target === modalAbout) {
      modalAbout.style.display = "none";
    }
  });

  // Skills Modal
  const openSkills = document.getElementById("openModalSkills");
  const modalSkills = document.getElementById("modalSkills");
  const closeSkills = document.getElementById("closeModalSkills");

  // Ouvrir la modale "Skills"
  if (openSkills) {
    openSkills.addEventListener("click", () => {
      modalSkills.style.display = "block";
    });
  }

  // Fermer la modale "Skills" avec la croix
  if (closeSkills) {
    closeSkills.addEventListener("click", () => {
      modalSkills.style.display = "none";
    });
  }

  // Fermer la modale "Skills" en cliquant à l'extérieur de la modale
  window.addEventListener("click", (e) => {
    if (e.target === modalSkills) {
      modalSkills.style.display = "none";
    }
  });
});
      </script>


/**fenetre modal projet* */