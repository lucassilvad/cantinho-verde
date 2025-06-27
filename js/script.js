const secoesNav = document.querySelectorAll(".blog-secoes-nav li");
const secoes = document.querySelectorAll(".blog-secao");

if (secoesNav.length && secoes.length) {
  secoes[0].classList.add("ativo");
  secoesNav[0].classList.add("ativo");

  function sectionShowing(index) {
    secoes.forEach((secao) => {
      secao.classList.remove("ativo");
    });
    secoesNav.forEach((secao) => {
      secao.classList.remove("ativo");
    });

    secoesNav[index].classList.toggle("ativo");
    secoes[index].classList.toggle("ativo");
  }

  secoesNav.forEach((secaoNome, index) => {
    secaoNome.addEventListener("click", () => {
      sectionShowing(index);
    });
  });
}
