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


je vois que cette fois ci c'est la localisation de root sur nginx qui pose problÃ¨me

je vois que le serveur met /etc/nginx en root

![[Pasted image 20241207220047.png]]

lorsque je met quoi que ce soit je tombe sur cette page :

![[Pasted image 20241207215950.png]]

ensuite je teste un nginx.conf

![[Pasted image 20241207220315.png]]

puis je vois dedans plusieurs autres pages qui peuvent m'interresser

mime.types

puis conf.d/default.conf

![[Pasted image 20241207220415.png]]
