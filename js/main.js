const RETRASO_PASO_MS = 60;

function movimientoReducido() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function mostrarElemento(elemento) {
  elemento.classList.add("is-visible");
}

function prepararApariciones() {
  const elementos = document.querySelectorAll("[data-revelar]");

  if (movimientoReducido() || !("IntersectionObserver" in window)) {
    elementos.forEach(mostrarElemento);
    return;
  }

  const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
      if (!entrada.isIntersecting) {
        return;
      }

      mostrarElemento(entrada.target);
      observador.unobserve(entrada.target);
    });
  }, {
    rootMargin: "0px 0px -8% 0px",
    threshold: 0.16
  });

  document.querySelectorAll("[data-grupo-revelar]").forEach((grupo) => {
    grupo.querySelectorAll("[data-revelar]").forEach((elemento, indice) => {
      elemento.style.setProperty("--retraso", `${indice * RETRASO_PASO_MS}ms`);
      elemento.classList.add("revelar");
      observador.observe(elemento);
    });
  });
}

function skillVisible(skill) {
  return skill.classList.contains("is-abierta")
    || skill.matches(":hover")
    || skill.matches(":focus-visible");
}

function sincronizarSkill(skill) {
  skill.setAttribute("aria-expanded", skillVisible(skill) ? "true" : "false");
}

function prepararSkills() {
  const skills = [...document.querySelectorAll(".skill")];

  skills.forEach((skill) => {
    skill.setAttribute("aria-expanded", "false");

    skill.addEventListener("click", () => {
      const abrir = !skill.classList.contains("is-abierta");
      skills.forEach((otra) => otra.classList.remove("is-abierta"));

      if (abrir) {
        skill.classList.add("is-abierta");
      }

      skills.forEach(sincronizarSkill);
    });

    ["mouseenter", "mouseleave", "focus", "blur"].forEach((nombre) => {
      skill.addEventListener(nombre, () => sincronizarSkill(skill));
    });
  });

  document.addEventListener("keydown", (evento) => {
    if (evento.key !== "Escape") {
      return;
    }

    skills.forEach((skill) => skill.classList.remove("is-abierta"));

    if (document.activeElement && document.activeElement.classList.contains("skill")) {
      document.activeElement.blur();
    }

    skills.forEach(sincronizarSkill);
  });
}

function escucharCambioDeMovimiento() {
  const consulta = window.matchMedia("(prefers-reduced-motion: reduce)");
  const alCambiar = () => {
    if (!consulta.matches) {
      return;
    }

    document.querySelectorAll(".revelar").forEach((elemento) => {
      elemento.classList.remove("revelar");
      mostrarElemento(elemento);
    });
  };

  if (typeof consulta.addEventListener === "function") {
    consulta.addEventListener("change", alCambiar);
    return;
  }

  consulta.addListener(alCambiar);
}

function iniciar() {
  prepararApariciones();
  prepararSkills();
  escucharCambioDeMovimiento();
}

iniciar();
