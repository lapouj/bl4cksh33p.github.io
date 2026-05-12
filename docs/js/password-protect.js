(async function () {
  const allowed = sessionStorage.getItem("writeups_access");
  if (allowed === "true") return;

  const hashToMatch = "73071035dc69effe38bb59037523dc82a656cd8b28ae5119dd763fb48fbb6e97"; // SHA-256 du mot de passe

  const password = prompt("Entrez le mot de passe pour accéder aux Writeups :");
  if (!password) {
    window.location.href = "https://lapouj.github.io/bl4cksh33p.github.io/";
    return;
  }

  const enc = new TextEncoder();
  const digest = await crypto.subtle.digest("SHA-256", enc.encode(password));
  const hash = Array.from(new Uint8Array(digest))
    .map(b => b.toString(16).padStart(2, "0"))
    .join("");

  if (hash === hashToMatch) {
    sessionStorage.setItem("writeups_access", "true");
  } else {
    alert("Mot de passe incorrect.");
    window.location.href = "https://lapouj.github.io/bl4cksh33p.github.io/";
  }
})();
