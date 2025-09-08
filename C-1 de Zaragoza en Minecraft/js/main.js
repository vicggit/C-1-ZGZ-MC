function copiarTexto() {
    const text = document.getElementById("ip_button").innerText;
    const button = document.getElementById("ip_button");
    const toastTrigger = document.getElementById('ip_button');
    const toastLiveExample = document.getElementById('Ip_Alert');
    const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);

    //navigator.clipboard.writeText(text).then(() => {
        button.classList.remove("ip");
        button.classList.add("ip_copied");
        toastBootstrap.show()
        setTimeout(() => {
          button.classList.remove("ip_copied");
          button.classList.add("ip");
        }, 1500);
    //}).catch(err => {
    //    console.error("Error al copiar: ", err);
    //});
}
document.addEventListener("DOMContentLoaded", function () {
  const navbarCollapse = document.getElementById("navbarToggler");
  const navTabs = document.querySelector("#navbarScroll");

  function updateNavTabs() {
    if (window.innerWidth < 1200 && navbarCollapse.classList.contains("show")) {
      navTabs.classList.remove("nav-tabs");
      navTabs.classList.add("nav-underline");
    } else {
      navTabs.classList.remove("nav-underline");
      navTabs.classList.add("nav-tabs");
    }
  }

  if (navbarCollapse && navTabs) {
    navbarCollapse.addEventListener("show.bs.collapse", updateNavTabs);
    navbarCollapse.addEventListener("hide.bs.collapse", updateNavTabs);
    window.addEventListener("resize", updateNavTabs);
    updateNavTabs();
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const emailInput = document.getElementById("email");

  emailInput.addEventListener("input", function () {
    const ok = emailInput.checkValidity();
    if (emailInput.value.trim() === "") {
      emailInput.classList.remove("is-invalid");
    } else {
      emailInput.classList.toggle("is-invalid", !ok);
    }
  });
});