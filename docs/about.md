# <span class="typewriter">À propos de Bl4ckSh33p</span>

<style>
body {
  background-color: #0d0d0d;
  color: #e0e0e0;
  font-family: 'Courier New', monospace;
}

h1, h2, h3 {
  font-family: 'Courier New', monospace;
  color: #00ffcc;
  text-shadow: 0 0 5px #00ffcc;
}

.typewriter {
  display: inline-block;
  overflow: hidden;
  border-right: .15em solid #00ffcc;
  white-space: nowrap;
  animation: typing 3s steps(40, end), blink-caret .75s step-end infinite;
}

@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}
@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: #00ffcc; }
}

.glitch-char {
  display: inline-block;
  transition: 0.1s ease;
}

.member-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background-color: #1a1a1a;
  border: 1px solid #00ffcc;
  padding: 1.2rem;
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(0, 255, 204, 0.2);
  flex: 1 1 45%;
}
.member-card:hover {
  transform: scale(1.05);
  box-shadow: 0 0 15px rgba(0, 255, 204, 0.5);
}

.container {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: center;
  margin-top: 2rem;
}
</style>

<p>Nous sommes une équipe passionnée de <strong>CTF</strong>, <strong>pentest</strong> et <span id="glitch-text">cybersécurité offensive</span>.  
Chacun apporte sa spécialité au troupeau noir.</p>

## L'Équipe

<div class="container">

<div class="member-card">
    <h3>Jordan "Lapouj"</h3>
    <p><strong>Spécialité :</strong> OS, HTB</p>
    <p>Exploitant infatigable de systèmes, passionné par l’infra et les machines obscures.</p>
</div>

<div class="member-card">
    <h3>Florent "Pwnz0r"</h3>
    <p><strong>Spécialité :</strong> Reverse Engineering, Binary Exploits</p>
    <p>Il démonte les binaires comme d'autres démontent des Lego. Ghidra est sa deuxième maison.</p>
</div>

<div class="member-card">
    <h3>Paul "El rasho macuin"</h3>
    <p><strong>Spécialité :</strong> Web, GOAT</p>
    <p>Le roi des injections. Même les headers HTTP lui obéissent.</p>
</div>

<div class="member-card">
    <h3>Aubin "Enak"</h3>
    <p><strong>Spécialité :</strong> OSINT, Stegano</p>
    <p>Il voit ce que personne ne voit. Même dans un pixel noir sur fond noir.</p>
</div>

<p align="center">
  <img src="../images/blacksheep_gif.gif" alt="Bl4ckSh33p" width="70%" style="border-radius: 16px; box-shadow: 0 0 20px #00ffcc;"/>
</p>

</div>

<script>
const target = document.getElementById("glitch-text");
const original = target.textContent;
const chars = "@#$%&*?!§+=<>µ£¥";

function glitchText() {
  let glitched = "";

  for (let i = 0; i < original.length; i++) {
    if (Math.random() < 0.15 && original[i] !== " ") {
      glitched += chars[Math.floor(Math.random() * chars.length)];
    } else {
      glitched += original[i];
    }
  }

  target.textContent = glitched;

  setTimeout(() => {
    target.textContent = original;
  }, 100);

  setTimeout(glitchText, 300 + Math.random() * 700);
}

glitchText();
</script>
