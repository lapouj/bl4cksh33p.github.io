---
categorie: web-server
tags:
  - rootme
  - "#informatique/cyber"
lien: https://www.root-me.org/fr/Challenges/Web-Serveur/SQL-injection-Numerique
---
# But

trouver le mot de passe de l'administrateur


# Fourni

http://challenge01.root-me.org/web-serveur/ch18/

un site de CMS 

# MÃ©thode de rÃ©solution


j'ai commencÃ© par essayer de sqli le formulaire de connection, puis j'ai Ã©tÃ© voir ce qu'Ã©tait une sqli numÃ©rique, j'ai donc trouvÃ© sur internet

![[Pasted image 20241013171324.png]]

il fallait donc essaie de faire l'injection dans l'url

j'ai donc essayÃ© assez basiquement de faire un 

![[Pasted image 20241013171432.png]]

j'obtiens donc tous les "articles"

je peux essayer de rÃ©cupÃ©rer la base des users

![[Pasted image 20241013171514.png]]


je rÃ©cupÃ¨re bien des champs, 

je suppose que la base des users Ã  plus que 2 champs et qu'ici je n'ai que les 2 derniers, surement mot de passe et date de crÃ©ation

je peux donc essayer de mettre dans le site les diffÃ©rents mots de passe que j'ai trouvÃ©, ou bien essayer de me connectÃ© sur la page de login avec "admin" et les 3 mots de passe, 

en l'occurence, le flag est le premier