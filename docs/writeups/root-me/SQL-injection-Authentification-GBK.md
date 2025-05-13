---
categorie: web-server
tags:
  - rootme
  - "#informatique/cyber"
lien:
---
# But

faire une injection pour me connecter et rÃ©cupÃ©rer le flag

# Fourni

un formulaire de connection
http://challenge01.root-me.org/web-serveur/ch42/index.php$

![[Pasted image 20241020170433.png]]




# MÃ©thode de rÃ©solution

j'ai trouvÃ© la solution par accient en cherchant ce qu'Ã©tait gbk ( un character set)
la vulnÃ©rabilitÃ© est assez prÃ©cise et Ã  Ã©tÃ© patchÃ© depuis


# Solution 

solution trouvÃ©e sur : https://github.com/BethGriggs/SQLInjection



â€˜Â¿' OR 1=1 ##â€™

cela fonctionne car on utilise un charactÃ¨re GBK et function mysql_real_escape_string() ne support pas les caractÃ¨res GBK et crÃ©er un "BUG" ne filtrant pas le caractÃ¨re quote " â€™ "
