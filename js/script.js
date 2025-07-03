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
  const filtrarBtn = document.querySelector("[data-catalogo='apply']");
  const resetarBtn = document.querySelector("[data-catalogo='reset']");
  const tipoInput = document.querySelector("#tipo");
  const categoriaInput = document.querySelector("#categoria");

  if (plantas.length !== 0 && filtrarBtn) {
    plantas.forEach((planta) => {
      planta.classList.add(activeClass);
    });

    function aplicarFiltros() {
      const tipoPlanta = tipoInput.value;
      const categoriaPlanta = categoriaInput.value;

      const isTipoSelected = tipoPlanta !== "";
      const isCategoriaSelected = categoriaPlanta !== "";
      console.log(tipoPlanta);
      console.log(categoriaPlanta);

      plantas.forEach((planta) => {
        if (isTipoSelected) {
          if (tipoPlanta === planta.dataset.tipo)
            planta.classList.add(activeClass);
          else planta.classList.remove(activeClass);
        } else {
          planta.classList.add(activeClass);
        }

        if (isCategoriaSelected) {
          if (categoriaPlanta === planta.dataset.categoria) {
            planta.classList.add(activeClass);
          } else {
            planta.classList.remove(activeClass);
          }
        }
      });
    }

    function resetarFiltros() {
      tipoInput.value = "";
      categoriaInput.value = "";
      plantas.forEach((planta) => [planta.classList.add(activeClass)]);
    }

    function handleChange() {
      if (this.value === "ornamental") {
        categoriaInput.classList.add(activeClass);
      } else if (this.value !== "ornamental") {
        categoriaInput.classList.remove(activeClass);
        categoriaInput.value = "";
      }
    }

    filtrarBtn.addEventListener("click", aplicarFiltros);
    resetarBtn.addEventListener("click", resetarFiltros);
    tipoInput.addEventListener("change", handleChange);
  }
}
initCatalogFilter();
