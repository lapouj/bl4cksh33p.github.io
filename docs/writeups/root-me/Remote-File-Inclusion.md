<script src="../../../js/password-protect.js"></script>

---
categorie: web-serveur
tags:
  - rootme
  - "#informatique/cyber"
lien:
---
# But

rÃ©cupÃ©rer le contenu du fichier index.php dans lequel on peut retrouver le flag Ã  l'aide un RFI (Remote File Inclusion)

# Fourni

un site avec juste 
![[Pasted image 20241203161914.png]]

je comprend donc que le champ lang= n'est pas sÃ©curisÃ© donc je peux dÃ©jÃ  faire un test: 
![[Pasted image 20241203162644.png]]


Ã§a passe.



je vais mainteannt monter un serveur php sur ma machine avec un ngrok pour avoir un accÃ¨s depuis internet.


![[Pasted image 20241203162758.png]]
![[Pasted image 20241203162815.png]]

j'ajoute ensuite dans /var/www/html/index.php :

![[Pasted image 20241203162843.png]]


j'aurai pu faire plus simple avec une fonction qui Ã©xÃ©cute des commandes et un paramÃªtre get pour rÃ©cupÃ©rer des commandes, mais ngork ne l'autorise pas, il a fallu Ãªtre un peu plus crÃ©atif

![[Pasted image 20241203162946.png]]


je ne sais pas pourquoi mais il faut absolumenet laisser le parameter sinon Ã§a ne charge pas 







# MÃ©thode de rÃ©solution
