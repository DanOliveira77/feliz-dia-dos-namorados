// Permite "ampliar" as polaroids também ao tocar em telas sensíveis ao toque
document.querySelectorAll(".polaroid").forEach((foto) => {
  foto.addEventListener("click", (evento) => {
    evento.stopPropagation();

    const ativa = document.querySelector(".polaroid.ativa");
    if (ativa && ativa !== foto) {
      ativa.classList.remove("ativa");
      return;
    }

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
