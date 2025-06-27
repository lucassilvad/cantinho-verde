const activeClass = "ativo";

function initSectionChanging() {
  const secoesNav = document.querySelectorAll(".blog-secoes-nav li");
  const secoes = document.querySelectorAll(".blog-secao");

  if (secoesNav.length && secoes.length) {
    secoes[0].classList.add(activeClass);
    secoesNav[0].classList.add(activeClass);

    function sectionShowing(index) {
      secoes.forEach((secao) => {
        secao.classList.remove(activeClass);
      });
      secoesNav.forEach((secao) => {
        secao.classList.remove(activeClass);
      });

      secoesNav[index].classList.toggle(activeClass);
      secoes[index].classList.toggle(activeClass);
    }

    secoesNav.forEach((secaoNome, index) => {
      secaoNome.addEventListener("click", () => {
        sectionShowing(index);
      });
    });
  }
}
initSectionChanging();

function initCatalogFilter() {
  const plantas = document.querySelectorAll(".js-catalogo-lista a");
  const filtrarBtn = document.querySelector(".btn-filtrar");

  if (plantas.length !== 0 && !!filtrarBtn) {
    plantas.forEach((planta) => {
      planta.classList.add(activeClass);
    });

    function aplicarFiltros() {
      const tipoPlanta = document.querySelector("#tipo").value;
      const categoriaPlanta = document.querySelector("#categoria").value;

      console.log(tipoPlanta);

      plantas.forEach((planta) => {
        const isTipoSelected = tipoPlanta === "";
        const whichTipoIsSelected = planta.dataset.tipo === tipoPlanta;
        const whichCategorisIsSelected =
          planta.dataset.categoria === categoriaPlanta;

        if (isTipoSelected) planta.classList.add(activeClass);
        else planta.classList.remove(activeClass);

        if (whichTipoIsSelected) planta.classList.add(activeClass);
        if (categoriaPlanta !== "") planta.classList.remove(activeClass);

        if (whichCategorisIsSelected) planta.classList.add(activeClass);
      });

      plantas.forEach((planta) => {
        if (planta.dataset.categoria === tipoPlanta) {
          planta.classList.add(activeClass);
        }
      });
    }

    filtrarBtn.addEventListener("click", aplicarFiltros);
  }
}
initCatalogFilter();
