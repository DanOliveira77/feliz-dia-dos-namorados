// Permite "ampliar" as polaroids também ao tocar em telas sensíveis ao toque
document.querySelectorAll(".polaroid").forEach((foto) => {
  foto.addEventListener("click", () => {
    document.querySelectorAll(".polaroid.ativa").forEach((outra) => {
      if (outra !== foto) outra.classList.remove("ativa");
    });
    foto.classList.toggle("ativa");
  });
});

// Clicar fora de uma foto ampliada fecha o zoom
document.addEventListener("click", (evento) => {
  if (!evento.target.closest(".polaroid")) {
    document.querySelectorAll(".polaroid.ativa").forEach((foto) => {
      foto.classList.remove("ativa");
    });
  }
});
