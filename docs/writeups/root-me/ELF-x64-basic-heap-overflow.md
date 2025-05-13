<script src="../../../js/password-protect.js"></script>

---
categorie: app-systeme
tags:
  - rootme
  - "#informatique/cyber"
---
IdÃ©e :

# 1 
parce que la fonction gets continue jusqu'a un newline, on peut avoir avoir un dossier qui contient de nombreux sous dossiers pour faire un buffer overflow#

# 2
remplir le arg jusqu'a atteindre le Cmd et mettre une commande perso dedans


il fallait remplir le malloc(0x20) - sois 32 octets - et ensuite le reste de la commande aurai rempli le second malloc

 ./ch94 
Enter directory you want to display : ./.passwd ./.passwd ./.passwd./.passwd ./.passwd /bin/cat 