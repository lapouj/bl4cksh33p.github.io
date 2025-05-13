---
categorie: web-client
tags:
  - rootme
  - "#informatique/cyber"
lien: https://www.root-me.org/fr/Challenges/Web-Client/XSS-DOM-Based
---
# But

Récupérez le cookie de session de l’administrateur et connectez-vous sur sa session.

# Fourni

http://challenge01.root-me.org/web-client/ch24/
une page web avec un jeu sur lequel on est sencé deviné une couleur qui va se générer selon un script JS

# Méthode de résolution

je pense qu'il faut envoyer dans le formulaire de contact un payload xss pour que l'admin le voit et envoie ses cookies sur une machine que je gère avec un serveur ngrok (voir un autre chall xss que j'ai validé mais pour lequel j'ai pas encore fait le WU)


je dois trouver en premier le formulaire dans lequel je peux faire un xss -

en gros je crois que c'est comme une injection, je dois sortir du contexte dans lequel je suis avec un `'` par exemple, puis faire mon injection


### Tests


















