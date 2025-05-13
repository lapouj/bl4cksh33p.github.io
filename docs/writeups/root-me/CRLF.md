<script src="../../../js/password-protect.js"></script>

---
categorie: ???
tags:
  - rootme
  - "#informatique/cyber"
---

# But

"tromper" l'admin

# Fourni

page de login avec logs de connection


![[Pasted image 20241013131643.png]]


# Méthode de résolution



j'ai compris ce qu'Ã©tait une crlf, mais il n'etait pas possible (ou ne semblait pas possible) d'injecter quoi ce que soit qui soit lu et interprÃ©tÃ© par la page PHP

http://challenge01.root-me.org/web-serveur/ch14/?username=guest%20authenticated.%0D%0Ahehe&password=admin

ceci affichait cela : 

![[Pasted image 20241013131803.png]]


il fallait juste montrer que quelqu'un s'est connectÃ© 

j'ai du trichÃ© parce qu'en fait j'avais rÃ©ussi mais pas a la maniÃ¨re que le site voulais donc je n'avais pas le flag

![[Pasted image 20241013131901.png]]


notamment la ou je n'avait rien mis apres le crlf 


# Conclusion

Challenge pas top, ne semble pas vraiment rÃ©aliste et le flag repose sur une syntaxe qui a mon sens est un peu arbitraire.