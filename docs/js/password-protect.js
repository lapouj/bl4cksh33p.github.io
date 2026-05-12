(async function () {
  const allowed = sessionStorage.getItem("writeups_access");
  if (allowed === "true") return;

  const hashToMatch = "1cd670f9da98311218eb9af5c2220447662d70b333a521b2413bf2b9a32d6bd1"; // SHA-256 du mot de passe

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
