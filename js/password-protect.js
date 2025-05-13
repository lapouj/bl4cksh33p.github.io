(function () {
  const allowed = sessionStorage.getItem("writeups_access");
  if (allowed === "true") return;

  const password = prompt("Entrez le mot de passe pour accéder aux Writeups :");
  if (password === "Bl4ckSh33pCTFSolved") {
    sessionStorage.setItem("writeups_access", "true");
  } else {
    window.location.href = "https://lapouj.github.io/bl4cksh33p.github.io/";
  }
})();
