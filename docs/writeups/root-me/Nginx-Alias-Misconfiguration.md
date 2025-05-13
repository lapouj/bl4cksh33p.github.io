<script src="../../../js/password-protect.js"></script>

---
categorie: web-serveur
tags:
  - rootme
  - "#informatique/cyber"
lien:
---
# But

RÃ©cupÃ©rer un flag qui est surement dans l'arborescence du site sur lequel je me trouve

# Fourni

un site avec juste :

![[Pasted image 20241207214929.png]]

il ne se passe rien (sauf un affichage en console) lorsque je clique sur le bouton "se connecter"


# MÃ©thode de rÃ©solution



je vais en premier lieu voir le code source : 

![[Pasted image 20241207215011.png]]


il se passe donc qq chose avec le /assets/


je vois dans le /assets/ qu'il semble Ãªtre vide

![[Pasted image 20241207215117.png]]


mais je sais que la vuln "alias misconfiguration" evoque le fait de tapper dans 

alias../ parce qu'il manque le / a la fin de la dÃ©claration dans le serveur nginx

![[Pasted image 20241207215258.png]]

voici ce que je peux trouver sur internet

![[Pasted image 20241207215356.png]]

je teste donc de faire assets../
![[Pasted image 20241207215419.png]]

![[Pasted image 20241207215436.png]]
