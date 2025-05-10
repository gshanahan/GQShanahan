document.addEventListener("DOMContentLoaded", () => {
    const headers = document.querySelectorAll(".project-card-header");
  
    headers.forEach(header => {
      header.addEventListener("click", () => {
        const card = header.closest(".project-card");
        const isOpen = card.classList.contains("open");
  
        // Optional: close all cards before toggling
        document.querySelectorAll(".project-card.open").forEach(openCard => {
          if (openCard !== card) openCard.classList.remove("open");
        });
  
        // Toggle the clicked card
        card.classList.toggle("open", !isOpen);
      });
    });
  });
  