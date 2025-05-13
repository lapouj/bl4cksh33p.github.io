<script src="../../../js/password-protect.js"></script>

---
categorie: web-serveur
tags:
  - rootme
  - "#informatique/cyber"
lien:
---


# But

Avoir accÃ¨s sur la page /admin 

# Fourni


un site internet en cours de construction FLASK 

# MÃ©thode de rÃ©solution

Je commence par rÃ©cupÃ©rer un jeton en faisant un get sur le /
![[Pasted image 20241203114621.png]]

ensuite j'essaie d'aller sur la page /admin

![[Pasted image 20241203114651.png]]

j'essaie ensuite de regarder ce que je peux faire avec ce jeton qui semble Ãªtre un JWT, mais j'ai perdu du temps, parce que c'est un jeton flask et pas JWT.




# Solution

je demande a chat gpt ce que je peux faire, et il me dit d'utiliser "flask-unsign" donc je vais voir, et je tombe sur une page de hacktricks

![[Pasted image 20241203114945.png]]
Je commence par dÃ©coder mon token :

![[Pasted image 20241203115205.png]]


je tÃ©lÃ©charge donc rockyou

et je teste de de bruteforce

![[Pasted image 20241203115036.png]]


puis je signe mon nouveau cookie qui indique "admin":"true" et je l'envoie dans ma requÃªte sur le /admin


![[Pasted image 20241203115140.png]]


Toujours regarder que la bonne techno est utilisÃ©e, pour ne pas perdre 1h Ã  chercher comment utiliser un cookie JWT qui n'en est pas un...