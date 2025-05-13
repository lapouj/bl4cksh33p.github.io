<script src="../../../js/password-protect.js"></script>

---
categorie: web-server
tags:
  - rootme
  - "#informatique/cyber"
lien: https://www.root-me.org/fr/Challenges/Web-Serveur/SQL-injection-String
---
# But

trouver le mot de passe de l'administrateur


# Fourni

http://challenge01.root-me.org/web-serveur/ch19/

un site de CMS 

# MÃ©thode de rÃ©solution


je vais m'attaquer a la nouvelle section la recherche, vu que l'url des id des articles ne fonctionne plus C.F. [[SQL injection - NumÃ©rique]]

avec un '--;
![[Pasted image 20241013173855.png]]
je parviens a faire afficher tous les articles

j'essaie donc un select * from users mais Ã§a ne match pas le nombre de colonnes

donc je rÃ©duit Ã  2, (titre, corps pour l'article, donc user password pour le user)


![[Pasted image 20241013173535.png]]

j'obtiens donc mon flag admin et les autres id en bonus !